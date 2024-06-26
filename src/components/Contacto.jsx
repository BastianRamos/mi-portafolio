import { Col, Container, Row } from "react-bootstrap"

import '../styles/contacto.css'

const URL_GMAIL = 'mailto:bastian2jz@gmail.com'
const URL_GITHUB = 'https://github.com/BastianRamos'
const URL_LINKEDIN = 'https://www.linkedin.com/in/bastianrs/'

const ICON_GMAIL = 'iconos_contacto/gmail.png'
const ICON_GITHUB = 'iconos_contacto/github-icon.png'
const ICON_LINKEDIN = 'iconos_contacto/linkedin.png'

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
                            👇 Más Información y Contacto
                        </h2>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center flotar altura-col-icon">
                        <a
                            className="hover-grow"
                            href={URL_LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={ICON_LINKEDIN}
                                height={60}
                                width={60}
                                alt="Icono de linkedin"
                            />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center flotar altura-col-icon">
                        <a className="hover-grow" href={URL_GMAIL} rel="noopener noreferrer">
                            <img
                                src={ICON_GMAIL}
                                height={60}
                                width={60}
                                alt="Icono de gmail"
                            />
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center flotar altura-col-icon">
                        <a
                            className="hover-grow"
                            href={URL_GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={ICON_GITHUB}
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