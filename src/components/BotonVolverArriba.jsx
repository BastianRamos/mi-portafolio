import { Link } from "react-scroll"

export const BotonVolverArriba = () => {

    window.onscroll = () => {
        const scrollVertical = window.scrollY
        console.log(scrollVertical)
        if (scrollVertical > 950) {
            console.log(document.getElementById('linkBtnSubir').classList.remove('d-none'))
        }
    }

    return (
        <Link id="linkBtnSubir" className="d-none d-sm-none" smooth spy to="presentacion">
            <div className="sticky-container-bottom-left justify-content-center">
                <img height={40} width={40} src="icon-cohete-up.png" alt="Icono cohete subiendo" />
            </div>
        </Link>
    )
}