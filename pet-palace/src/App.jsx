// App.jsx


import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import AddPet from "./pages/AddPet";
import Accessories from "./pages/Accessories";
import PetDetails from "./pages/PetDetails";
import PetCareTips from "./components/PetCareTips";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";

function App() {
  return (
    <>

      <Header />
      
      <Routes>
      
        <Route path="/" element={<><Hero /><Home /> <PetCareTips /></>} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
