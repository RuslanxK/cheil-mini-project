import React from 'react';
import { ErrorMessageProps } from 'interfaces/error';


export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-64">
      <p className="text-red-500 text-lg font-semibold">{message}</p>
    </div>
  );
};
