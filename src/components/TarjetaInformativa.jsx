import PropTypes from 'prop-types'

import '../styles/tarjetaInformativa.css'


export function TarjetaInformativa({ titulo, parrafo, textoSmall, image }) {
    return (
        <div className='contenedor flotar'>
            <h6 className='text-dark bold'>
                {titulo}
            </h6>
            <img src={image} width='100%' alt='imagen de ejemplo del proyecto desarrollado' />
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