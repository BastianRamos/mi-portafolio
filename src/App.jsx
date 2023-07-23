import { Sidebar } from "./components/Sidebar"
import { Presentacion } from "./components/Presentacion"
import { Tecnologias } from "./components/Tecnologias"
import { Experiencia } from "./components/Experiencia"
import { Contacto } from "./components/Contacto"
import { BotonVolverArriba } from "./components/BotonVolverArriba"
import { Proyectos } from "./components/Proyectos"
import MenuMobile from "./components/MenuMobile"

function App() {
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
