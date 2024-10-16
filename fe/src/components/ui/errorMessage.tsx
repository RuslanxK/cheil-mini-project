import React from 'react';
import { ErrorMessageProps } from 'interfaces/error';


export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <p className="text-red-500 text-sm font-semibold">{message}</p>
    </div>
  );
};
