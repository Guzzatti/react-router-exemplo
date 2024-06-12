import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { ListaComprasProvider } from "./context/ListaComprasContext";

import RootLayout from './layouts/RootLayout';

import Home from './routes/Home';
import ListaComprasSimples from './routes/ListaComprasSimples';
import Produtos from './routes/Produtos';
import ProdutoDetalhe from './routes/ProdutoDetalhe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/lista-compras',
        element: <ListaComprasSimples />,
      },
      {
        path: '/produtos',
        element: <Produtos />,
      },
      {
        path: '/produto/:id',
        element: <ProdutoDetalhe />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
