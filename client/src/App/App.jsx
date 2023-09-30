import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from '../components/Add/Add';
import CoffeeShopsPage from '../pages/CoffeeShopsPage/CoffeeShopsPage';
import CoffeeShopDetailPage from '../pages/CoffeeShopDetailPage/CoffeeShopDetailPage';
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home/Home';
import Footer from '../pages/Footer/Footer';
import Login from '../pages/Auth/LoginPage';
import Register from '../pages/Auth/Register';
import { UserContextProvider } from '../context/UserContext';
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
    <main className=" font-titleFont bg-gray-100 ">
      <UserContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coffeeshops" element={<CoffeeShopsPage />} />
          <Route path="/create" element={<Add />} />
          <Route path="/details/:id" element={<CoffeeShopDetailPage />} />
        </Routes>
      </UserContextProvider>
        < Footer />
    </main>
     </BrowserRouter>
  );
}
