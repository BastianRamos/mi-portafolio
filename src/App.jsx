import { Sidebar } from "./components/Sidebar"
import { Presentacion } from "./components/Presentacion"
import { Tecnologias } from "./components/Tecnologias"
import { Experiencia } from "./components/Experiencia"
import { Contacto } from "./components/Contacto"
import { BotonVolverArriba } from "./components/BotonVolverArriba"
import { Proyectos } from "./components/Proyectos"
import MenuMobile from "./components/MenuMobile"

function App() {

  window.onscroll = () => {
    // Para el boton de volver arriba en mobile
    window.scrollY > 950 && document.getElementById('linkBtnSubir').classList.remove('d-none')

    // Para el menú en mobile
    window.scrollY > 850
      ? document.getElementById('menu-mobile').classList.remove('d-none')
      : document.getElementById('menu-mobile').classList.add('d-none')
  }


  return (
    <>
      <MenuMobile />
      <Sidebar />
      <main>
        <video id="video-fondo" autoPlay loop >
          <source src="video-pulsaciones-iconos.mp4" type="video/mp4" />
        </video>
        <Presentacion />
        <Experiencia />
        <Tecnologias />
        <Proyectos />
        <Contacto />
        <BotonVolverArriba />
      </main>
    </>
  )
}

export default App
