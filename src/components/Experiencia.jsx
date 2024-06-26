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
                        <div className="mt-5 pt-3 mb-3">
                            <h6>Desarrollador Front End - Hackmonkeys S.A</h6>
                            <h6 style={{ fontSize: '.8rem' }}>Marzo 2021 a Diciembre 2022</h6>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                    >
                        <TarjetaInformativa
                            key={"hyundai"}
                            titulo="Hyundai Buses y Camiones"
                            parrafo="Desarrollé el back office y presté apoyo en el desarrollo de la app web completando tareas atrasadas que consistian en problemas de responsividad, pop ups, validaciones y conexión a APIs. Además aprendí a utilizar nuevas librerias y frameworks."
                            textoSmall="Tecnologías: ReactJS, HTML, CSS, SweetAlert2, Ant Design, Google Maps, Azure y Git."
                            urlImagen="/proyectos/hyundai-web-navegador.webp"
                            urlWeb={"https://www.hyundaicamionesybuses.cl/"}
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="my-4 my-sm-0 "
                    >
                        <TarjetaInformativa
                            key={"Aduana"}
                            titulo="Agencia de Aduanas Aníbal Moya"
                            parrafo="Conseguí corregir muchos errores de actualización y visualización de información. Además implementé el plugin fullcalendar para gestionar las fechas de llegada de los barcos a la aduana. Esto permitió mostrar mucha información de valor en un espacio reducido y visible para todo el personal."
                            textoSmall="Tecnologías: ReactJS, HTML, CSS, Material UI, SweetAlert2, Git y Firebase."
                            urlImagen="/proyectos/moya-web-navegador.webp"
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="mt-sm-4 mt-lg-0"
                    >
                        <TarjetaInformativa
                            key={"wetforest"}
                            titulo="Wetforest Ventures"
                            parrafo="Desarrollé una landing page de diseño moderno y sútiles animaciones. Como segunda etapa agregué la funcionalidad que permite crear una cuenta como empresa para responder un cuestionario y obtener asesoría. Además participé en la gestión manteniendo reuniones online con los stakeholders y comunicación formal vía correo."
                            textoSmall="Tecnologías: HTML, CSS, JavaScript, Git y Google Cloud."
                            urlImagen="/proyectos/wetforest-web-navegador.webp"
                            urlWeb={"https://wetforest.com/"}
                        />

                    </Col>
                </Row>
            </Container>
        </section >
    )
}