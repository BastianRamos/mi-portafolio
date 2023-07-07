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
                            <Card.Body>
                                <Card.Title className="text-dark ">
                                    Clima APP
                                </Card.Title>
                                <Card.Text className="text-secondary text-justify lh-sm">
                                    Con geolocalización o al ingresar una ciudad mostrará datos climáticos del momento.
                                    Desarrollada en React con componentes de Ant Design, conexión a las APIs de AccuWeather y
                                    alojada en la nube con Vercel.
                                </Card.Text>
                                <small className="text-secondary bold">
                                    React | Vite | Ant Design | Axios | Vercel
                                </small>
                                <Card.Img className="border-radius-8" variant="bottom" src="screenshot-climaapp.webp" />
                                <Button
                                    className="mt-3 d-grid"
                                    variant="dark"
                                    href="https://climaapp-bastianrs.vercel.app/"
                                    target="_blank"
                                >
                                    Visitar
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
