import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/index.css';
const queryClient = new QueryClient();

import App from './App';
import { CartProvider } from './contexts/cart';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
       <QueryClientProvider client={queryClient}>
      <CartProvider>
        <App />
      </CartProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
