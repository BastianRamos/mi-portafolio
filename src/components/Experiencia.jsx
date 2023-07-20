import { Col, Container, Row } from "react-bootstrap"
import { TarjetaInformativa } from "./TarjetaInformativa"


export function Experiencia() {

    return (
        <section
            id="experiencia"
            className="contenedor-fondo-gradient-transparente"
            aria-label="Experiencia laboral"
        >
            <Container>
                <Row className="justify-content-sm-center">
                    <Col xs={12}>
                        <h2 className='d-flex justify-content-center align-items-end title-container'>
                            💼 Experiencia Laboral
                        </h2>
                        <div className="flotar mt-5 pt-3 mb-3">
                            <h6>Desarrollador Frontend - Hackmonkeys S.A</h6>
                            <h6 style={{ fontSize: '.8rem' }}>Marzo 2021 a Diciembre 2022</h6>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                    >
                        <TarjetaInformativa
                            titulo="Hyundai Buses y Camiones"
                            parrafo="Desarrollé el back office y presté apoyo en el desarrollo de la app web realizando correcciones atrasadas enviadas por el cliente, problemas de responsividad, pop ups, validaciones, conexión a APIs Rest y también aprendí a utilizar nuevas librerias y frameworks."
                            textoSmall="Tecnologías: ReactJS, HTML, CSS, SweetAlert2, Ant Design, Google Maps, Azure y Git."
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="my-4 my-sm-0 "
                    >
                        <TarjetaInformativa
                            titulo="Agencia de Aduanas Aníbal Moya"
                            parrafo="Proyecto web de uso privado, ya se encontraba avanzado en desarrollo pero sin terminar donde se corrigieron muchos errores de actualización y visualización de información. Se implementó fullcalendar para gestionar las fechas de llegada de los barcos a la aduana. El objetivo principal era disminuir los tiempos de algunos procesos que se realizaban en papel y obtener información actualizada para todo el personal. Proyecto extenso debido a la gran cantidad de documentación y procesos internos."
                            textoSmall="Tecnologías: ReactJS, HTML, CSS, Material UI, SweetAlert2, Git y Firebase."
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="mt-sm-4 mt-lg-0"
                    >
                        <TarjetaInformativa
                            titulo="Wetforest Ventures"
                            parrafo="Se construyó una landing page con mucha información y con una primera idea de parte del cliente demasiado clásica y anticuada. Como resultado se consiguió un sitio web dinámico, moderno, con movimiento y colores adecuados. Se agregó la opción de iniciar sesión como empresa para interactuar a través de un cuestionario para obtener asesoría de strategic advisors. Además, debía mantener reuniones online con los stakeholders y comunicación formal vía correo."
                            textoSmall="Tecnologías: HTML, CSS, JavaScript, Git y Google Cloud."
                        />

                    </Col>
                </Row>
            </Container>
        </section >
    )
}