import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating, Typography } from "@material-tailwind/react";
import AllProducts from "./pages/AllProductsPage";
import Product from "./pages/product";
import Register from "./pages/ItemPost";

function App() {
  return (
    <>
      <Typography />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
