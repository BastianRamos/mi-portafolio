import PropTypes from 'prop-types'
import '../styles/tarjetaInformativa.css'

export const TarjetaInformativa = ({ titulo, parrafo, textoSmall }) => {
    return (
        <div className='contenedor flotar'>
            <h6 className='text-dark bold'>
                {titulo}
            </h6>
            <p className="lh-sm text-secondary pt-2 text-justify">
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