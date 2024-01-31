import { Col, Container, Row } from 'react-bootstrap'
import { TarjetaSkill } from './TarjetaSkill'


export function Tecnologias() {
    return (
        <section
            id="tecnologias"
            className='contenedor-fondo-gradient-transparente'
            aria-label="Tecnologías con las que he trabajado"
        >
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12}>
                        <h2 className='d-flex justify-content-center align-items-end title-container'>
                            💻 Skills Tecnológicas
                        </h2>
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/javascript-logo.png'
                            texto='JavaScript ES6'
                            porcentajeProgreso='60'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/react-logo.png'
                            texto='ReactJS'
                            porcentajeProgreso='60'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/html5-logo.png'
                            texto='HTML5'
                            porcentajeProgreso='60'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/css3-logo.png'
                            texto='CSS3'
                            porcentajeProgreso='50'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/sweetalert2-logo.png'
                            texto='SweetAlert 2'
                            porcentajeProgreso='50'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/bootstrap-logo.png'
                            texto='Bootstrap'
                            porcentajeProgreso='40'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/mui-logo.png'
                            texto='Material UI'
                            porcentajeProgreso='40'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/ant-design-logo.png'
                            texto='Ant Design'
                            porcentajeProgreso='40'
                        />
                    </Col>

                    <Col xs={4} lg={3} xl={2} className='d-flex justify-content-center'>
                        <TarjetaSkill
                            imagenSrc='logos_tecnologias/git-logo.png'
                            texto='Git'
                            porcentajeProgreso='40'
                        />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}