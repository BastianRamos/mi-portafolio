import { Link } from "react-scroll"

import '../styles/sidebar.css'


export function Sidebar() {
    return (
        <aside className="contenedor-sidebar d-none d-sm-block aparecer">
            <div className="sidebar deslizar-derecha-izquierda">
                <div className="perfil ">
                    <div className="imagen-perfil shadow-hover hover-grow" />
                    <a className="shadow-hover" href='CV.pdf' target="_blank" rel="noopener noreferrer">
                        Descarga mí CV
                    </a>
                </div>
                <ul >
                    <div>
                        <Link activeClass="active" spy smooth to="presentacion" duration={0} delay={0}>
                            <li className="menu-item-sidebar shadow-hover">
                                Presentación
                            </li>
                        </Link>
                        <Link activeClass="active" spy smooth to="experiencia" duration={0} delay={0}>
                            <li className="menu-item-sidebar shadow-hover">
                                Experiencia
                            </li>
                        </Link>
                        <Link activeClass="active" spy smooth to="tecnologias" duration={0} delay={0}>
                            <li className="menu-item-sidebar shadow-hover">
                                Tecnologías
                            </li>
                        </Link>
                        <Link activeClass="active" spy smooth to="proyectos" duration={0} delay={0}>
                            <li className="menu-item-sidebar shadow-hover">
                                Proyectos
                            </li>
                        </Link>
                        <Link activeClass="active" spy smooth to="contacto" duration={0} delay={0}>
                            <li className="menu-item-sidebar shadow-hover">
                                Contacto
                            </li>
                        </Link>
                    </div>
                </ul>
            </div>
        </aside>
    )
}