import React from 'react';

interface SpinnerProps {
  w: number;
  h: number;
  mr?: number;
}

export const Loader: React.FC<SpinnerProps> = ({ w, h, mr }) => (
  <svg 
    aria-hidden="true" 
    className={`inline w-${w} h-${h} text-blue-700 animate-spin fill-blue-100 mr-${mr || 0}`} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="75" fill="none"></circle>
  </svg>
);

