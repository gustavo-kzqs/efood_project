import Product from '../Product'
import massa from '../../assets/images/massa.png'
import sushi from '../../assets/images/sushi.png'
import { GridProduct } from './styles'

const products = [
  {
    image: massa,
    badge: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    badge2: 'Ótimas pizzas',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    image: sushi,
    badge: 'Japonesa',
    badge2: 'Destaque da semana',
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  }
]

const ProductsList = () => (
  <GridProduct>
    {products.map((product, index) => (
      <Product
        key={index}
        image={product.image}
        badge={product.badge}
        badge2={product.badge2}
        title={product.title}
        rating={product.rating}
        description={product.description}
      />
    ))}
  </GridProduct>
)

export default ProductsList
