import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos.jsx';
import InserirProduto from './routes/InserirProduto.jsx';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App/>,
    errorElement: <Erro404/>,
    children: [
      { 
        path: '/', 
        element: <Home/>
      },
      { 
        path: '/produtos', 
        element: <Produtos/>
      },
      { 
        path: '/editar/produtos/:id', 
        element: <EditarProdutos/>
      },
      { 
        path: '/excluir/produtos/:id', 
        element: <ExcluirProdutos/>
      },
      { 
        path: '/cadastrar', 
        element: <InserirProduto/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)