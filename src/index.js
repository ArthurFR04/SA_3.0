import React from 'react';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";

// import App from './App';
import HomeScreen from './pages/Home/HomeScreen';
import LoginScreen from './pages/Login/LoginScreen';
import RegisterScreen from './pages/Register/RegisterScreen';
import NewPostScreen from './pages/New Post/NewPostScreen';
import ProfileScreen from './pages/Profile/ProfileScreen';
import SearchScreen from './pages/Search/SearchScreen';
import PostScreen from './pages/Post/PostScreen';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <div  className='topzudoPah'>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/HomeScreen" />} /> */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="Login" element={<LoginScreen />} />
        <Route path="Register" element={<RegisterScreen />} />
        <Route path="NewPost" element={<NewPostScreen />} />
        <Route path="Post" element={<PostScreen />} />
        <Route path="Profile" element={<ProfileScreen />} />
        <Route path="Search" element={<SearchScreen />} />
      </Routes>
    </BrowserRouter>
  </div>

);