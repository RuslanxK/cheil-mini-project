import React from 'react';
import { IProduct } from 'interfaces/product';
import { featureOptions, commonDimensions } from 'interfaces/product';
import { Loader } from 'components/ui/loader';

interface ProductFormProps {
  productData: IProduct;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleFeaturesChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isLoading: boolean;
  submitText: string;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  productData,
  handleChange,
  handleFeaturesChange,
  isLoading,
  submitText,
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <div>
        <label className="block text-sm mb-1">Image URL</label>
        <input
          name="image"
          type="url"
          onChange={handleChange}
          value={productData.image}
          placeholder="Enter Image URL"
          className="w-full p-1 border rounded text-sm"
          required
        />
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">Product Code</label>
          <input
            name="code"
            onChange={handleChange}
            value={productData.code}
            placeholder="Enter Product Code"
            className="w-full p-1 border rounded text-sm"
            required
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">Product Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={productData.name}
            placeholder="Enter Product Name"
            className="w-full p-1 border rounded text-sm"
            required
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
        <div className="w-full sm:w-1/3">
          <label className="block text-sm mb-1">Color</label>
          <select
            name="color"
            onChange={handleChange}
            value={productData.color}
            className="w-full p-1 border rounded text-sm"
            required
          >
            <option value="" disabled>
              Select Color
            </option>
            <option value="biała">Biała</option>
            <option value="czarna">Czarna</option>
            <option value="srebrna">Srebrna</option>
          </select>
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-sm mb-1">Capacity (kg)</label>
          <select
            name="capacity"
            onChange={handleChange}
            value={productData.capacity || ''}
            className="w-full p-1 border rounded text-sm"
            required
          >
            <option value="" disabled>
              Select Capacity
            </option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10.5}>10.5</option>
          </select>
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-sm mb-1">Dimensions</label>
          <select
            name="dimensions"
            onChange={handleChange}
            value={productData.dimensions}
            className="w-full p-1 border rounded text-sm"
            required
          >
            <option value="" disabled>
              Select Dimensions
            </option>
            {commonDimensions.map((dim) => (
              <option key={dim} value={dim}>
                {dim}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Features</label>
        <select multiple value={productData.features} onChange={handleFeaturesChange} className="w-full p-1 border rounded text-sm">
          {featureOptions.map((feature) => (
            <option key={feature} value={feature}>
              {feature}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
        <div className="w-full sm:w-1/3">
          <label className="block text-sm mb-1">Energy Class</label>
          <select
            name="energyClass"
            onChange={handleChange}
            value={productData.energyClass || ''}
            className="w-full p-1 border rounded text-sm"
            required
          >
            <option value="" disabled>
              Select Class
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-sm mb-1">Price</label>
          <input
            name="price.value"
            onChange={handleChange}
            value={productData.price.value || ''}
            type="number"
            min={0}
            step={0.1}
            placeholder="Enter Price"
            className="w-full p-1 border rounded text-sm"
            required
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-sm mb-1">Currency</label>
          <select
            name="price.currency"
            onChange={handleChange}
            value={productData.price.currency || ''}
            className="w-full p-1 border rounded text-sm"
            required
          >
            <option value="" disabled>
              Select Currency
            </option>
            <option value="zł">zł</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">Installment Value</label>
          <input
            name="price.installment.value"
            onChange={handleChange}
            type="number"
            value={productData.price.installment.value}
            min={0}
            step={0.01}
            placeholder="Enter Installment Value"
            className="w-full p-1 border rounded text-sm"
            required
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">Installment Period</label>
          <input
            name="price.installment.period"
            onChange={handleChange}
            type="number"
            value={productData.price.installment.period}
            min={0}
            placeholder="Enter Installment Period"
            className="w-full p-1 border rounded text-sm"
            required
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 pb-2">
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">Valid From</label>
          <input
            name="price.validFrom"
            onChange={handleChange}
            value={productData.price.validFrom ? new Date(productData.price.validFrom).toISOString().split('T')[0] : ''}
            type="date"
            className="w-full p-1 border rounded text-sm"
            required
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="block text-sm mb-1">Valid To</label>
          <input
            name="price.validTo"
            onChange={handleChange}
            value={productData.price.validTo ? new Date(productData.price.validTo).toISOString().split('T')[0] : ''}
            type="date"
            className="w-full p-1 border rounded text-sm"
            required
          />
        </div>
      </div>

      <button type="submit" className="p-2 text-sm bg-blue-600 text-white rounded mt-4 hover:bg-blue-700 transition-colors">
        {isLoading ? <Loader mr={2} /> : null } {submitText}
      </button>
    </div>
  );
};
