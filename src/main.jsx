import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ConfigPage from './components/ConfigPage/ConfigPage.jsx'
//Eliminar despues, es solo para resting
import NavBar from './components/NavigationBar/NavBar.jsx'


 
const Router = createBrowserRouter ([
  { path: "/",element: <App/>},
{ path: "/profileconfig",element: <ConfigPage/>}, 
  //eliminar navtest, es solo para testing
  { path: "/navtest1",element: <NavBar/>},
  { path: "/navtest2",element: <NavBar/>},
  { path: "/navtest3",element: <NavBar/>},
  { path: "/navtest4",element: <NavBar/>}
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Router}/>
  </React.StrictMode>,
)
