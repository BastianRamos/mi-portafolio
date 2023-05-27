import { Sidebar } from "./components/Sidebar"
import { Presentacion } from "./components/Presentacion"
import { Tecnologias } from "./components/Tecnologias"
import { Experiencia } from "./components/Experiencia"
import { Contacto } from "./components/Contacto"

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <video className="video-fondo" src="video-pulsaciones-iconos.mp4" autoPlay loop />
        <Presentacion />
        <Experiencia />
        <Tecnologias />
        <Contacto />
      </main>
    </>
  )
}

export default App
