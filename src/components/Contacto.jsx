import { Col, Container, Row } from "react-bootstrap"

import '../styles/contacto.css'


export function Contacto() {
    return (
        <section
            id="contacto"
            className="contenedor-fondo-gradient-transparente"
            aria-label="Información de contacto"
        >
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2 className='d-flex justify-content-center align-items-end altura-titulo'>
                            👉 Contáctame, agrégame, hablemos...
                        </h2>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center flotar altura-col-icon">
                        <a
                            className="hover-grow"
                            href="https://www.linkedin.com/in/bastianrs/"
                            target="_blank"
                        >
                            <img
                                src="iconos_contacto/linkedin.png"
                                height={60}
                                width={60}
                                alt="Icono de linkedin"
                            />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center flotar altura-col-icon">
                        <a className="hover-grow" href="mailto:bastian2jz@gmail.com">
                            <img
                                src="iconos_contacto/gmail.png"
                                height={60}
                                width={60}
                                alt="Icono de gmail"
                            />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center flotar altura-col-icon">
                        <a
                            className="hover-grow"
                            href="https://github.com/BastianRamos"
                            target="_blank"
                        >
                            <img
                                src="iconos_contacto/github-icon.png"
                                height={60}
                                width={60}
                                alt="Icono de linkedin"
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}