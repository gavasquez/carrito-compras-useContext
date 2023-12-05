import { Products } from './components/Products';
import { products as initialProducts } from "./mocks/products.json";
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { CardProvider } from './context/card';

function App() {


  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts( initialProducts );

  return (
    <CardProvider>
      <Header />
      <Card />
      <Products products={ filteredProducts } />
      <Footer />
    </CardProvider>
  );
}

export default App;
