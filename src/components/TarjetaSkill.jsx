import PropTypes from 'prop-types'
import { Card, ProgressBar } from 'react-bootstrap'

import '../styles/tarjetaSkill.css'


export const TarjetaSkill = ({ imagenSrc, texto, porcentajeProgreso }) => {
    return (
        <Card className='contenedor-tarjeta rebote-vertical-hover'>
            <Card.Img variant='top' src={imagenSrc} className='p-2' aria-label={`Logo ${texto}`} />
            <Card.Body className='pt-1' >
                <Card.Text className='text-tarjeta'>
                    {texto}
                </Card.Text>
                <ProgressBar animated now={porcentajeProgreso} variant='info' />
            </Card.Body>
        </Card>
    )
}

TarjetaSkill.propTypes = {
    imagenSrc: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    porcentajeProgreso: PropTypes.string.isRequired
}

TarjetaSkill.defaultProps = {
    imagenSrc: 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
    texto: 'Nivel de experiencia',
    porcentajeProgreso: '10'
}