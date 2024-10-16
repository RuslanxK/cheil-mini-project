import React from 'react';
import ReactDOM from 'react-dom';
import { X } from 'react-feather';

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const CenteredPopup: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 h-auto max-h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
          <div className="h-auto box-border overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
