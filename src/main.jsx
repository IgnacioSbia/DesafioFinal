import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/home.jsx'
import Profile from './Components/Profile/Profile.jsx'

import MainPage from './Components/MainPage/mainPage.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import Login from './components/Login/Login.jsx'
import PlaylistByCupid from './Components/PlaylistByCupid/PlaylistByCupid.jsx'
import ConfigPage from './Components/ConfigPage/ConfigPage.jsx'
import SearchPage from './components/SearchPage/SearchPage.jsx'
import PlaylistByUser from './components/PlaylistByUser/PlaylistByUser.jsx'



 
const Router = createBrowserRouter ([
  { path: "/",element: <MainPage/>},
  {path: "/SignIn", element: <SignIn/>},
  {path: "/LogIn", element: <Login/>},
  {path: "/Home", element: <Home/>},
  {path: "/Home/MusicalCupid", element: <PlaylistByCupid/>},
  { path: "/Profile",element: <Profile/>}, 
  {path: "/Profile/Config", element: <ConfigPage/>},
  { path: "/search",element: <SearchPage/>}, 
  { path: "/profile/playlist",element: <PlaylistByUser/>}
 ])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
