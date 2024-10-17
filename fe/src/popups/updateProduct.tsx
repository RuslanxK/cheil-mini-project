import React, { useState, useEffect } from 'react';
import { CenteredPopup } from 'components/ui/model';
import { IProduct, Features } from 'interfaces/product';
import { useUpdateData } from '../hooks/useAPI';
import { API_URLS } from '../utils/api';
import { ErrorMessage } from 'components/ui/errorMessage';
import { ProductForm } from 'components/forms/productForm';
import { Capacity } from 'interfaces/product';

interface UpdateProductPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: IProduct;
}

export const UpdateProductPopup: React.FC<UpdateProductPopupProps> = ({ isOpen, onClose, data }) => {
  const [productData, setProductData] = useState<IProduct>(data);

  useEffect(() => {
    setProductData(data); 
  }, [data]);

  const { mutate: updateProduct, isLoading, error, isError } = useUpdateData(`${API_URLS.product}/${productData._id}`, 'products');

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

    updateProduct(cleanedProductData, {
      onSuccess: () => {
        console.log('Product updated successfully');
        onClose();
      },
      onError: (error: any) => {
        console.error('Failed to update product:', error.message);
      },
    });
  };

  return (
    <CenteredPopup isOpen={isOpen} onClose={onClose} title="Update Product">
      <form onSubmit={handleSubmit}>
        <ProductForm
          productData={productData}
          handleChange={handleChange}
          handleFeaturesChange={handleFeaturesChange}
          isLoading={isLoading}
          submitText="Update Product"
        />
        {isError && error && (
          <ErrorMessage message={error.error} />
        )}
      </form>
    </CenteredPopup>
  );
};
