import { Link } from "react-scroll"


export function BotonVolverArriba() {

    window.onscroll = () => {
        const scrollVertical = window.scrollY

        if (scrollVertical > 950) {
            document.getElementById('linkBtnSubir').classList.remove('d-none')
        }
    }

    return (
        <Link id="linkBtnSubir" className="d-none d-sm-none" spy to="presentacion">
            <div id="sticky-container-bottom-cohete" className="justify-content-center">
                <img height={40} width={40} src="icon-cohete-up.png" alt="Icono cohete subiendo" />
            </div>
        </Link>
    )
}