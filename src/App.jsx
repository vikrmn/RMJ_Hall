import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import Contact from "./pages/Contact";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Gallery from "./pages/Gallery";
import HallGallery from "./pages/HallGallery";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hall/:hallId" element={<HallGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

