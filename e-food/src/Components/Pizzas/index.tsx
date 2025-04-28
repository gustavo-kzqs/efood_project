import pizza from '../../assets/images/pizza.png'
import {
  AddButton,
  Card,
  Grid,
  PizzaDescription,
  PizzaImage,
  PizzaName
} from './styles'

const pizzas = [
  {
    id: 1,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 4,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 5,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 6,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  }
]
const PizzaGrid: React.FC = () => {
  return (
    <Grid>
      {pizzas.map((pizza) => (
        <Card key={pizza.id}>
          <PizzaImage src={pizza.image} alt={pizza.nome} />
          <PizzaName>{pizza.nome}</PizzaName>
          <PizzaDescription>{pizza.descricao}</PizzaDescription>
          <AddButton>Adicionar ao carrinho</AddButton>
        </Card>
      ))}
    </Grid>
  )
}

export default PizzaGrid
