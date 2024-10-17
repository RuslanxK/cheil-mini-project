import { Products } from './components/products';
import { Filters } from './components/filters';
import { FiltersProvider } from './contexts/filters';
import { AddProduct } from 'components/products/addProduct';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <FiltersProvider>
          <Filters />
          <Products />
          <AddProduct />
        </FiltersProvider>
      </div>
    </div>
  );
}

export default App;
