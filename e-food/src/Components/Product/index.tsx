import {
  Badge,
  Badges,
  Button,
  Card,
  CardContainer,
  CardWrapper,
  Description,
  Image,
  Info,
  Rating,
  Title,
  TitleRow
} from './styles'
import { Star } from 'lucide-react' // React icons
import { Link } from 'react-router-dom'

interface ProductProps {
  image: string
  badge?: string
  badge2?: string
  title: string
  rating?: number
  description: string
}

const Product = ({
  image,
  badge,
  title,
  rating,
  description,
  badge2
}: ProductProps) => (
  <CardContainer>
    <Card>
      <CardWrapper>
        <Image src={image} />
        <Badges>
          <Badge>{badge}</Badge>
          <Badge>{badge2}</Badge>
        </Badges>
      </CardWrapper>
      <Info>
        <TitleRow>
          <Title>{title}</Title>
          <Rating>
            {rating} <Star size={16} fill="#fbc531" color="#fbc531" />
          </Rating>
        </TitleRow>
        <Description>{description}</Description>
        <Link to="/restaurantes">
          <Button>Saiba mais</Button>
        </Link>
      </Info>
    </Card>
  </CardContainer>
)

export default Product
