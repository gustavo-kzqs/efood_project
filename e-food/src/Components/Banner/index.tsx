import logo from '../../assets/images/logo.png'
import { Cart, Container, Title } from './styles'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <Container>
      <Link to={'/'}>
        <Title>Restaurantes</Title>
      </Link>
      <img src={logo} alt="efood logo" />
      <Cart>0 produto(s) no carrinho</Cart>
    </Container>
  )
}

export default Banner

//FAZER PRATICAMENTE O MESMO NO FOOTER***
