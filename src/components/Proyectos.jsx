import { Col, Container, Row, Card, Button } from "react-bootstrap"

import '../styles/proyectos.css'

const URL_CLIMAAPP = 'https://climaapp-bastianrs.vercel.app/'



export function Proyectos() {
    return (
        <section
            id="proyectos"
            className="contenedor-fondo-gradient-transparente"
            aria-label="Proyectos personales o de trabajos de forma freelance."
        >
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2 className='d-flex justify-content-center align-items-end title-container'>
                            📂 Proyectos Web
                        </h2>
                    </Col>
                    <Col xs={12} className="mt-5" align='center'>
                        <Card className="card-container flotar">
                            <Card.Body>
                                <Card.Title className="text-dark ">
                                    Clima APP
                                </Card.Title>
                                <Card.Text className="text-secondary align-paragraph lh-sm">
                                    Con geolocalización o al ingresar una ciudad mostrará datos climáticos del momento.
                                    Desarrollada en React con componentes de Ant Design, conexión a las APIs de AccuWeather y
                                    alojada en la nube con Vercel.
                                </Card.Text>
                                <small className="text-secondary bold">
                                    React | Vite | Ant Design | Axios | Vercel
                                </small>
                                <Card.Img className="border-radius-8" variant="bottom" src="screenshot-climaapp.webp" />
                                <Button
                                    className="mt-3 d-grid react-bg-color shadow-hover"
                                    variant="secondary"
                                    href={URL_CLIMAAPP}
                                    target="_blank"
                                    size="lg"
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
