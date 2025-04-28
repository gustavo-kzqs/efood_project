import Footer from '../../Components/Footer'
import ProductList from '../../Components/ProductList'
import Header from '../../Components/Header'
import { GlobalCss } from '../../styles'

const Home = () => (
  <>
    <div>
      <GlobalCss />
      <Header />
      <ProductList />
      <ProductList />
      <ProductList />
      <Footer />
    </div>
  </>
)

export default Home
