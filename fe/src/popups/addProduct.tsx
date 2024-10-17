import React, { useState } from 'react';
import { CenteredPopup } from 'components/ui/model';
import { IProduct, Capacity, Features } from 'interfaces/product';
import { useCreateData } from '../hooks/useAPI';
import { API_URLS } from '../utils/api';
import { ErrorMessage } from 'components/ui/errorMessage';
import { ProductForm } from 'components/forms/productForm';
import { getInitialProductData } from '../utils/productUtils'; 


interface AddProductPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddProductPopup: React.FC<AddProductPopupProps> = ({ isOpen, onClose }) => {
  const [productData, setProductData] = useState<IProduct>(getInitialProductData());

  const { mutate: createProduct, isLoading, error, isError } = useCreateData(API_URLS.products, 'products');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const nameParts = name.split('.');

    if (nameParts[0] === 'price' && nameParts[1] === 'installment') {
      setProductData((prevData) => ({
        ...prevData,
        price: {
          ...prevData.price,
          installment: {
            ...prevData.price.installment,
            [nameParts[2]]: Number(value),
          },
        },
      }));
    } else if (name === 'capacity') {
      setProductData((prevData) => ({
        ...prevData,
        capacity: parseFloat(value) as Capacity,
      }));
    } else if (nameParts[0] === 'price') {
      setProductData((prevData) => ({
        ...prevData,
        price: {
          ...prevData.price,
          [nameParts[1]]: value,
        },
      }));
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFeatures = Array.from(e.target.selectedOptions, (option) => option.value as Features);
    setProductData((prevData) => ({
      ...prevData,
      features: selectedFeatures,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { _id, ...cleanedProductData } = productData;

    createProduct(cleanedProductData, {
      onSuccess: () => {
        console.log('Product created successfully');
        setProductData(getInitialProductData()); 
        onClose();
      },
      onError: (error: any) => {
        console.error('Failed to create product:', error.message);
      },
    });
  };

  return (
    <CenteredPopup isOpen={isOpen} onClose={onClose} title="Add New Product">
    <form onSubmit={handleSubmit}>
      <ProductForm
        productData={productData}
        handleChange={handleChange}
        handleFeaturesChange={handleFeaturesChange}
        isLoading={isLoading}
        submitText="Add Product"
      />
      {isError && error && (
        <ErrorMessage message={error.error} />
      )}
    </form>
  </CenteredPopup>
  );
};
