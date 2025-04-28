import massa from '../../assets/images/massa.png'
import {
  BannerContainer,
  BannerContent,
  FundoImagem,
  TextImg,
  Title
} from './styles'

const BanImg = () => (
  <BannerContainer>
    <FundoImagem src={massa} />
    <BannerContent>
      <TextImg>Italiana</TextImg>
      <Title>La Dolce Trattoria</Title>
    </BannerContent>
  </BannerContainer>
)

export default BanImg
