import React from 'react';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import App from './App'
import HomeScreen from './pages/Home/HomeScreen';
import LoginScreen from './pages/Login/LoginScreen';
import RegisterScreen from './pages/Register/RegisterScreen';
import NewPostScreen from './pages/New Post/NewPostScreen';

import ProfileScreen from './pages/Profile/ProfileScreen';
import ProfileAdmScreen from './pages/ProfileAdm/ProfileAdmScreen';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';

import OtherProfileScreen from './pages/Profile/OtherProfileScreen';
import SearchScreen from './pages/Search/SearchScreen';
import PostScreen from './pages/Post/PostScreen';


if (JSON.parse(localStorage.getItem('Login'))) {
  console.log();
}
else {
  localStorage.setItem('Login', JSON.stringify({permissao: 3}))
}


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="Login" element={<LoginScreen />} />
        <Route path="Register" element={<RegisterScreen />} />
        <Route path="NewPost" element={<NewPostScreen />} />
        <Route path="Post" element={<PostScreen />} />
        <Route path="Profile" element={<ProfileScreen />} />
        <Route path="EditProfile" element={<ProfileEdit />} />
        <Route path="OProfile" element={<OtherProfileScreen />} />
        <Route path="Search" element={<SearchScreen />} />
        <Route path="Adm" element={<ProfileAdmScreen/>} />
      </Routes>
    </BrowserRouter>
  </div>

);