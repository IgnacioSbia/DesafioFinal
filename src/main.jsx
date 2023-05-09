import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/home.jsx'
import Profile from './Components/Profile/Profile.jsx'
import ConfigPage from './components/ConfigPage/ConfigPage.jsx'
import SearchPage from './components/SearchPage/SearchPage.jsx'

 
const Router = createBrowserRouter ([
  { path: "/",element: <App/>},
  {path: "/Home", element: <Home/>},
  { path: "/Profile",element: <Profile/>}, 
  { path: "/search",element: <SearchPage/>}, 
  {path: "/profileconfig", element: <ConfigPage/>}
 ])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
