import { Link } from "react-scroll"


export function BotonVolverArriba() {
    return (
        <Link id="linkBtnSubir" className="d-none d-sm-none aparecer" spy to="presentacion">
            <div id="sticky-container-bottom-cohete" className="justify-content-center">
                <img height={40} width={40} src="icon-cohete-up.png" alt="Icono cohete subiendo" />
            </div>
        </Link>
    )
}