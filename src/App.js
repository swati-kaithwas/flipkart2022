// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Component/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { StoreData } from "./Redux/action";
import { useSelector } from "react-redux";
import { Head } from "./components/Landing/Head";
// import { ShowProduct } from "./components/Landing/ShowProduct";
// import { Login } from "./Component/Account/Login";
import { Account } from "./Component/Account";
import { Products } from "./Component/Products";
import Cart from "./Component/Cart";
import { Carousel } from "./Component/Carousel";
import { caruosel } from "./Component/Caruoseldata";
import { Billing } from "./Component/Billing";
import { Producthead } from "./Component/Producthead";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch("http://localhost:3000/productdata")
  //     .then((res) => res.json())
  //     .then((res) => dispatch(StoreData(res)))
  //     .catch((err) => console.log(err));
  // }, []);
  // const x = useSelector((state) => state.productreducer.data);
  // console.log(x);
  return (
    <div className="App">
      <Navbar />
      {/* <Producthead /> */}
      {/* <Products /> */}
      {/* <Carousel slides={caruosel} /> */}

      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Billing" element={<Billing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
