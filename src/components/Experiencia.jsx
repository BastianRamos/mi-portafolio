import { Col, Container, Row } from "react-bootstrap"
import { TarjetaInformativa } from "./TarjetaInformativa"

export const Experiencia = () => {

    const quitarAgregarClase = (idElemento) => {
        const idsTarjetas = ['tarjetaHyundai', 'tarjetaAduana', 'tarjetaWetforest']

        idsTarjetas.forEach(idTarjeta => {
            document.getElementById(idTarjeta).classList.add('flip')
        })
        document.getElementById(idElemento).classList.remove('flip')
    }


    return (
        <section
            id="experiencia"
            className="contenedor-fondo-gradient-transparente mt-1"
            aria-label="Experiencia laboral"
        >
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3 className='d-flex justify-content-center align-items-end altura-titulo-20vh'>
                            💼 Experiencia Laboral
                        </h3>
                        <div className="flotar mt-5">
                            <h6> {'>'} Desarrollador Frontend - Hackmonkeys S.A</h6>
                            <h6 style={{ fontSize: '.8rem' }}>Marzo 2021 a Diciembre 2022</h6>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        sm={4}
                        id="tarjetaHyundai"
                        className="sombra flip"
                        onMouseLeave={() => quitarAgregarClase('tarjetaHyundai')}
                    >
                        <TarjetaInformativa
                            titulo="Hyundai Buses y Camiones"
                            parrafo="Desarrollé el back office y presté apoyo en el desarrollo del sitio web para correcciones del cliente, responsividad, pop ups, validaciones, mostrar información extraida de APIs e implementación de librerias."
                            textoSmall="Tecnologías: ReactJS, HTML, CSS, SweetAlert2, Ant Design, Google Maps, Azure y Git."
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={4}
                        id="tarjetaAduana"
                        className="my-3 my-sm-0 "
                        onMouseLeave={() => quitarAgregarClase('tarjetaAduana')}
                    >
                        <TarjetaInformativa
                            titulo="Agencia de Aduanas Aníbal Moya"
                            parrafo="Proyecto web de uso privado, ya se encontraba avanzado en desarrollo pero sin terminar donde se corrigieron muchos errores de actualización y visualización de información. Se implementó fullcalendar para gestionar las fechas de llegada de los barcos a la aduana. El objetivo principal era disminuir los tiempos de algunos procesos que se realizaban en papel y obtener información actualizada para todo el personal. Proyecto extenso debido a la gran cantidad de documentación y procesos internos."
                            textoSmall="Tecnologías: ReactJS, HTML, CSS, Material UI, SweetAlert2, Git y Firebase."
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={4}
                        id="tarjetaWetforest"
                        onMouseLeave={() => quitarAgregarClase('tarjetaWetforest')}
                    >
                        <TarjetaInformativa
                            titulo="Wetforest Ventures"
                            parrafo="Se construyó una landing page con mucha información y con una primera idea de parte del cliente demasiado clásica y anticuada. Como resultado se consiguió un sitio web dinámico, moderno, con movimiento y colores adecuados. Por otra parte, debía mantener reuniones online con los stakeholders y comunicación formal vía correo."
                            textoSmall="Tecnologías: HTML, CSS, JavaScript, Git y Google Cloud."
                        />

                    </Col>
                </Row>
            </Container>
        </section >
    )
}