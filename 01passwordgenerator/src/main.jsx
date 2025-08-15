import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import CurrencyConvertor from './components/currencyConvertor/CurrencyConvertor.jsx';
import PasswordConverter from './components/passwordGen/PasswordConverter.jsx';
import Home from './components/home/Home.jsx';
import User from './components/user/User.jsx';
import Sam from './components/sam/Sam.jsx';
import ToDo from './components/todo/ToDo.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='currency-convertor' element={<CurrencyConvertor />} />
      <Route path='password-generator' element={<PasswordConverter />} >
        <Route path='sam' element={<Sam/>} />
      </Route>
      <Route path='user:id' element={<User />} />
      <Route path='todo' element={<ToDo />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
