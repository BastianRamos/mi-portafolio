import PropTypes from 'prop-types'

import '../styles/tarjetaInformativa.css'


export function TarjetaInformativa({ titulo, parrafo, textoSmall, urlImagen }) {
    return (
        <div className='contenedor'>
            <h6 className='text-dark bold'>
                {titulo}
            </h6>
            <img src={urlImagen} width='100%' alt='miniatura del proyecto' />
            <p className="lh-sm text-secondary pt-2 align-paragraph">
                {parrafo}
            </p>
            <small className="text-secondary">
                {textoSmall}
            </small>
        </div>
    )
}

TarjetaInformativa.propTypes = {
    titulo: PropTypes.string.isRequired,
    parrafo: PropTypes.string.isRequired,
    textoSmall: PropTypes.string
}

TarjetaInformativa.defaultProps = {
    titulo: 'Ingresar Título',
    parrafo: 'Ingresar Párrafo',
}