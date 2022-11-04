import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/userContext';
import { CategoriesProvider } from './contexts/categoriesContext';
import { CartProvider } from './contexts/cartContext';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
