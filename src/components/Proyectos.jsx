import { Col, Container, Row, Card, Button } from "react-bootstrap"

import '../styles/proyectos.css'

export const Proyectos = () => {
    return (
        <section
            id="proyectos"
            className="contenedor-fondo-gradient-transparente"
            aria-label="Proyectos personales o de trabajos de forma freelance."
        >
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3 className='d-flex justify-content-center align-items-end altura-titulo-20vh'>
                            📂 Proyectos Web
                        </h3>
                    </Col>
                    <Col xs={12} className="mt-5" align='center'>
                        <Card className="card-container flotar">
                            <Card.Body className="pb-0">
                                <Card.Title className="text-dark ">
                                    Clima APP
                                </Card.Title>
                                <Card.Text className="text-secondary">
                                    Con geolocalización o la ciudad que escribas mostrará datos climáticos del momento.
                                    Desarrollada en React con componentes de Ant Design, conexión a las APIs de AccuWeather y
                                    alojada en la nube con Vercel.
                                </Card.Text>
                                <small className="text-secondary bold">
                                    React | Vite | Ant Design | Axios | Vercel
                                </small>
                            </Card.Body>
                            <Card.Img variant="bottom" src="screenshot-climaapp.webp" className="px-2 pb-1" />
                            <Button variant="dark" href="https://climaapp-bastianrs.vercel.app/" target="_blank">
                                Visitar
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
