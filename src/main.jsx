import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/home.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import MainPage from "./components/MainPage/mainPage.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Login from "./Components/Login/Login.jsx";
import CheckIn from "./Components/CheckIn/CheckIn.jsx";
import PlaylistByCupid from "./Components/PlaylistByCupid/PlaylistByCupid.jsx";
import ConfigPage from "./Components/ConfigPage/ConfigPage.jsx";
import SearchPage from "./components/SearchPage/SearchPage.jsx";
import PlaylistByUser from "./Components/PlaylistByUser/PlaylistByUser.jsx";
import RecoverAccount from "./components/RecoverAccount/RecoverAccount.jsx";
import AddSongToPlaylist from "./Components/AddSongToPlaylist/AddSongToPlaylist.jsx";
import ContextualMusic from "./Components/ContextualMusic/contextualMusic.jsx";
import MusicalCupidCarousel from "./Components/MusicalCupidCarousel/MusicalCupidCarousel.jsx";
import CreatePlaylist from "./components/CreatePlaylist/createPlaylist.jsx";
import PlaylistByContextualMusic from "./Components/PlaylistByContextualMusic/PlaylistByContextualMusic.jsx";

const Router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/SignIn", element: <SignIn /> },
  { path: "/CheckIn", element: <CheckIn /> },
  { path: "/RecoverAccount", element: <RecoverAccount /> },
  { path: "/LogIn", element: <Login /> },
  { path: "/Home", element: <Home /> },
  { path: "/Home/ContextMusic", element: <ContextualMusic /> },
  { path: "/Home/MusicalCupid", element: <MusicalCupidCarousel /> },
  { path: "/Home/PlaylistByMusicalCupid", element: <PlaylistByCupid /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Profile/Config", element: <ConfigPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/profile/playlist", element: <PlaylistByUser /> },
  { path: "/profile/playlist/addsongs", element: <AddSongToPlaylist /> },
  { path: "/profile/createPlaylist", element: <CreatePlaylist /> },
  { path: "/Home/playlistByContextualMusic", element:<PlaylistByContextualMusic/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
