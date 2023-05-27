import '../styles/presentacion.css'

export const Presentacion = () => {
    return (
        <section
            id='presentacion'
            className="container-presentacion deslizar-arriba-abajo-fade"
            aria-label="Presentación del autor"
        >
            <div>
                <div className='flotar'>
                    <p className="semi-white lh-1">
                        H o l a 👋&nbsp;,&nbsp; m e &nbsp; l l a m o
                    </p>
                    <p className="semi-white giant-font bold lh-1">
                        Bastian Ramos.
                    </p>
                    <p className="soft-gray giant-font bold lh-1 my-2 my-sm-0">
                        Me gusta el desarrollo web, en especial trabajar con <b className="react-color">React.</b>
                    </p>
                    <p className="semi-white lh-sm text-justify">
                        Soy ingeniero en informática 👨‍🎓 titulado de Duoc UC en Santiago de Chile 🇨🇱. Me desempeño como
                        desarrollador front end, con mucho interés por continuar aprendiendo sobre las
                        tecnologías ligadas a javascript, responsividad, seguridad, buenas prácticas,
                        metodología ágil, infraestructura y más.
                    </p>
                </div>
                <div className="d-grid justify-content-center ">
                    <img className="rotacion-infinita" src="react.svg" />
                </div>
            </div>
        </section>
    )
}