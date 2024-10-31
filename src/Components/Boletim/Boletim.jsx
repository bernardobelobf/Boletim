import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Boletim() {
    const [boletim, setBoletim] = useState(null);
    const [loadding, setLoadding] = useState(true);
    const ExibeNotas = async () => {
        try {
            const options = {
                method: 'GET',
                url: `http://localhost:3000/notas`
            };
            const response = await axios.request(options);
            setBoletim(response.data);
        } catch (error) {
            console.error(error);
        } finally{
            setLoadding(false)
            console.log(boletim)
        }
    };
    useEffect(() => {
        ExibeNotas();
        
    }, []);

    useEffect(() => {
        
    }, [boletim]);
    if(loadding) return <h1>carregando...</h1>
    return (
        <>
            <h1>Boletim</h1>
            {boletim && (
                <Container>
                    {boletim.bim1.map((item, index)=>
                    <Row key={index}>
                        <Col>
                            <h3>{item.disciplina}</h3>
                        </Col>
                    
                        <Col>
                            <h3>{item.nota}</h3>
                        </Col>
                    </Row>

               )}
                </Container>
            )}
        </>
    );
}
