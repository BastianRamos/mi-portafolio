import { Col, Container, Row } from 'react-bootstrap'
import '../styles/presentacion.css'
import '../styles/sidebar.css'
import { Link } from 'react-scroll'

export const Presentacion = () => {
    return (
        <section
            id='presentacion'
            className="container-presentacion deslizar-arriba-abajo-fade"
            aria-label="Presentación del autor"
        >
            <Container className='p-3 p-sm-0'>
                <Row>
                    <Col xs={12} className='flotar p-0'>
                        <Row>
                            <Col xs={8} sm={12} className='text-sm-start m-auto m-sm-0'>
                                <p className="semi-white lh-1">
                                    H o l a 👋&nbsp;,&nbsp; m e &nbsp; l l a m o
                                </p>
                                <p className="semi-white giant-font bold lh-1">
                                    Bastian Ramos.
                                </p>
                            </Col>
                            <Col className="d-grid d-sm-none justify-content-start">
                                <div className="imagen-perfil hover-grow shadow-hover" />
                            </Col>
                        </Row>
                        <p className="text-end text-sm-start soft-gray giant-font bold lh-1 my-3 my-md-2 my-lg-0">
                            Me gusta el desarrollo web, en especial trabajar con <b className="react-color">React.</b>
                        </p>
                        <p className="semi-white lh-sm text-justify">
                            Soy ingeniero en informática 👨‍🎓 titulado de Duoc UC en Santiago de Chile 🇨🇱. Me desempeño como
                            desarrollador front end, con mucho interés por continuar aprendiendo sobre las
                            tecnologías ligadas a javascript, responsividad, seguridad, buenas prácticas,
                            metodología ágil, infraestructura y más.
                        </p>
                    </Col>
                    <Col xs={12} className='text-center'>
                        <img
                            height={60}
                            width={60}
                            className="rotacion-infinita mt-2"
                            src="react.svg"
                            alt='Logo react'
                        />
                        <div className='pt-5 pt-sm-0 d-contents d-sm-none'>
                            <a id='linkCv' className="shadow-hover" href='CV.pdf' target="_blank">
                                Descarga mí CV
                            </a>
                        </div>
                    </Col>

                    <Col xs={12} className='d-sm-none d-flex justify-content-center'>
                        <Link to='experiencia'>
                            <div
                                id='container-btn-bajar'
                                className='d-grid justify-content-center align-content-center click-me'
                            >
                                <img
                                    height={30}
                                    width={30}
                                    src='flecha-hacia-abajo.png'
                                    alt='Icono flecha hacia abajo'
                                />
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}