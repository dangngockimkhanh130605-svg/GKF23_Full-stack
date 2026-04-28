import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import Home from "./components/Home";
import List from "./components/List";
import Add from "./components/Add";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Airpods 4", cat: "Điện tử", price: "6.500.000", qty: "0" },
    { id: 2, name: "Đầm công chúa", cat: "Thời trang", price: "500.000", qty: "5" },
    { id: 3, name: "iPhone 15", cat: "Điện tử", price: "18.990.000", qty: "8" },
    { id: 4, name: "Samsung Galaxy S24", cat: "Điện tử", price: "20.990.000", qty: "10" },
    { id: 5, name: "Áo hoodie unisex", cat: "Thời trang", price: "350.000", qty: "25" },
    { id: 6, name: "Quần jean nam", cat: "Thời trang", price: "420.000", qty: "18" },
    { id: 7, name: "Sữa tươi Vinamilk 1L", cat: "Thực phẩm", price: "32.000", qty: "50" },
    { id: 8, name: "Mì gói Hảo Hảo", cat: "Thực phẩm", price: "4.000", qty: "200" },
    { id: 9, name: "Nồi cơm điện Sharp", cat: "Gia dụng", price: "890.000", qty: "12" },
    { id: 10, name: "Máy xay sinh tố", cat: "Gia dụng", price: "650.000", qty: "7" },
  ]);

  return (
    <BrowserRouter>
      <MyNavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/list"
          element={<List products={products} setProducts={setProducts} />}
        />
        <Route
          path="/add"
          element={<Add products={products} setProducts={setProducts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;