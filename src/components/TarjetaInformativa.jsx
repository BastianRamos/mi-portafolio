import PropTypes from 'prop-types'

import '../styles/tarjetaInformativa.css'


export function TarjetaInformativa({ titulo, parrafo, textoSmall, urlImagen, urlWeb }) {
    return (
        <div className='contenedor'>
            <h6 className='text-dark bold'>
                {titulo}
            </h6>
            <a className='cursor-pointer hover-grow' href={urlWeb} target='_blank' rel='noopener noreferrer'>
                <img className='flotar' src={urlImagen} width='100%' alt='miniatura del proyecto' />
            </a>
            <p className='lh-sm text-secondary pt-2 align-paragraph'>
                {parrafo}
            </p>
            <small className='text-secondary'>
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