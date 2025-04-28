import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { BackButton, HeaderContainer, LinkCart, Logo } from './styles'
import { Link } from 'react-router-dom'

const Banner = () => (
  <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} />
    <Link to="/">
      <BackButton>Restaurantes</BackButton>
    </Link>
    <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
  </HeaderContainer>
)

export default Banner

//FAZER PRATICAMENTE O MESMO NO FOOTER***
