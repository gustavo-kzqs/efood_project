import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import redesSocias from '../../assets/images/redes sociais.png'
import { FooterText, HeaderContainer, Logo } from './styles'

const Footer = () => (
  <HeaderContainer style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} />
    <img src={redesSocias} />
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.
    </FooterText>
  </HeaderContainer>
)

export default Footer

//FAZER PRATICAMENTE O MESMO NO FOOTER***
