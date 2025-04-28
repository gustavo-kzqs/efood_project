import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { HeaderContainer, Logo, Title } from './styles'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} />
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </HeaderContainer>
)

export default Header

//FAZER PRATICAMENTE O MESMO NO FOOTER***
