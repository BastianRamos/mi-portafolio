import { Link } from "react-scroll"
import '../styles/sidebar.css'

export const Sidebar = () => {
    return (
        <aside className="contenedor-sidebar d-none d-sm-block">
            <div className="sidebar deslizar-derecha-izquierda">
                <div className="perfil ">
                    <div className="imagen-perfil" />
                    <h6>Este soy yo</h6>
                    <a className="shadow-hover" href='CV.pdf' target="_blank">
                        Descarga mí CV
                    </a>
                </div>
                <ul >
                    <div>
                        <Link activeClass="active" smooth spy to="presentacion">
                            <li className="menu-item-sidebar shadow-hover">
                                Presentación
                            </li>
                        </Link>
                        <Link activeClass="active" smooth spy to="experiencia">
                            <li className="menu-item-sidebar shadow-hover">
                                Experiencia
                            </li>
                        </Link>
                        <Link activeClass="active" smooth spy to="tecnologias">
                            <li className="menu-item-sidebar shadow-hover">
                                Tecnologías
                            </li>
                        </Link>
                        <Link activeClass="active" smooth spy to="contacto">
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