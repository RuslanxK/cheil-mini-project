import { useState } from 'react';
import { Plus } from 'react-feather';
import { AddProductPopup } from 'popups/addProduct';


export const AddProduct = () => {

  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const openAddProductModal = () => {
    setIsAddProductOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductOpen(false);
  };


  return (
    <>
        <button
        className="fixed bottom-10 right-10 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center"
        onClick={openAddProductModal}
      >
        <Plus size={20} />
      </button>

       <AddProductPopup isOpen={isAddProductOpen} onClose={closeAddProductModal}/>
       
    </>
  );
};
