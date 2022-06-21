import React from 'react';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// import App from './App';
import HomeScreen from './pages/Home/HomeScreen';
import LoginScreen from './pages/Login/LoginScreen';
import RegisterScreen from './pages/Register/RegisterScreen';
import NewPost from './pages/New Post/NewPost';
import { Teste1, Teste2 } from './pages/Landing/Testezin';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/HomeScreen" />} />
        <Route path="HomeScreen" element={<HomeScreen />} />
        <Route path="LoginScreen" element={<LoginScreen />} />
        <Route path="RegisterScreen" element={<RegisterScreen />} />
        <Route path="NewPost" element={<NewPost />} />
        <Route path="Teste1" element={<Teste1 />} />
        <Route path="Teste2" element={<Teste2 />} />
      </Routes>
    </BrowserRouter>
  </div>

);