import { useState } from 'react';
import { useFetchData } from 'hooks/useAPI';
import { ProductCard } from '../cards/Product';
import { Button } from '../button';
import { useFilterContext } from '../../contexts/filters';
import { ChevronDown } from 'react-feather';
import { ErrorMessage } from 'components/ui/errorMessage';
import { API_URLS } from '../../utils/api';
import { IProduct } from 'interfaces/product';
import { Loader } from 'components/ui/loader';


export const Products = () => {

  const [visibleProductsCount, setVisibleProductsCount] = useState(6);

  const { filters, query } = useFilterContext();

  const { data: products, status, error, isFetching } = useFetchData<IProduct[]>('products', API_URLS.products);

  const searchByCode = products?.filter((product) => {
    return product.code.toLowerCase().includes(query.toLowerCase());
  });

  const filteredProducts = searchByCode?.filter((product) => {
    if (filters.capacity && product.capacity !== filters.capacity) {
      return false;
    }
    if (filters.energyClass && product.energyClass !== filters.energyClass) {
      return false;
    }
    return !(filters.feature && !product.features.includes(filters.feature));
  });

  const sortedProducts = filteredProducts?.sort((a, b) => {
    if (filters.sort === 'price') {
      return a.price.value - b.price.value;
    }
    if (filters.sort === 'capacity') {
      return a.capacity - b.capacity;
    }
    return 0;
  });

  const visibleProducts = sortedProducts?.slice(0, visibleProductsCount);

  const loadMoreProducts = () => {
    setVisibleProductsCount((prevCount) => prevCount + 6);
  };


  if (status === 'loading' || isFetching) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader mr={0}/>
      </div>
    );
  }
  

  if (status === 'error') {
    const errorMessage = error && typeof error === 'object' && 'message' in error
      ? (error as { message: string }).message
      : 'An unknown error occurred';

    return <ErrorMessage message={errorMessage} />;
  }

  if (filteredProducts?.length === 0) {
    return (
      <div>
        <p className="text-center text-gray-500 text-xl mt-4">
          Brak produktów spełniających kryteria wyszukiwania
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 pb-5">
        {visibleProducts?.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>

      {visibleProductsCount < (sortedProducts?.length || 0) && (
        <div className="flex justify-center pb-4">
          <Button
            variant={'tertiary'}
            value={'Pokaż więcej'}
            icon={<ChevronDown />}
            onClick={loadMoreProducts}
          />
        </div>
      )}

    </>
  );
};
