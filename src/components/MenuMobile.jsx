import { Link } from 'react-scroll'
import { Container, Nav, Navbar } from "react-bootstrap"

const NAVBAR_STYLE = { backgroundColor: 'rgb(32, 64, 73)', textAlign: 'center' }


function MenuMobile() {

    window.onscroll = () => {
        window.scrollY > 850
            ? document.getElementById('menu-mobile').classList.remove('d-none')
            : document.getElementById('menu-mobile').classList.add('d-none')
    }


    return (
        <Navbar id='menu-mobile' className="bg-body-tertiary d-sm-none d-none" collapseOnSelect expand={false} variant="dark" sticky="top" style={NAVBAR_STYLE}>
            <Container>
                <Navbar.Brand>
                    <Link activeClass="active" to="presentacion" smooth duration={1000}>
                        <img
                            src="/brs-logo.webp"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Bastian Ramos Saumontt logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >
                        <Link activeClass='active' to='presentacion' spy smooth duration={1000} delay={0} offset={-150}>
                            <Nav.Link href='#presentacion'>
                                Presentación
                            </Nav.Link>
                        </Link>
                        <Link activeClass='active' to='experiencia' spy smooth duration={1000} delay={0} offset={-150}>
                            <Nav.Link href='#experiencia'>
                                Experiencia
                            </Nav.Link>
                        </Link>
                        <Link activeClass='active' to='tecnologias' spy smooth duration={1000} delay={0} offset={-150}>
                            <Nav.Link href='#tecnologias'>
                                Tecnologías
                            </Nav.Link>
                        </Link>
                        <Link activeClass='active' to='proyectos' spy smooth duration={1000} delay={0} offset={-150}>
                            <Nav.Link href='#proyectos'>
                                Proyectos
                            </Nav.Link>
                        </Link>
                        <Link activeClass='active' to='contacto' spy smooth duration={1000} delay={0} offset={-150}>
                            <Nav.Link href='#contacto'>
                                Contacto
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuMobile