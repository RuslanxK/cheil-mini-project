import React from 'react';

interface SpinnerProps {
  mr?: number;
}

export const Loader: React.FC<SpinnerProps> = ({ mr }) => (
  <svg 
    aria-hidden="true" 
    className={`inline w-4 h-4 text-blue-400 animate-spin fill-blue-100 ml-${mr || 0}`} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="75" fill="none"></circle>
  </svg>
);

