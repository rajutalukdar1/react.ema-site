import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Invantory/Inventory';
import { productsAndCartLoder } from './Components/loaders/ProductsAndCartLoaders';
import Orders from './Components/Order/Orders';
import Shop from './Components/Shop/Shop';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        loader: productsAndCartLoder,
        element: <Orders></Orders>
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
