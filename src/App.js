import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import "./App.css";
import ProductDetails from "./container/ProductDetails";
// import ProductComponent from "./container/ProductComponent";
import ProductListing from "./container/ProductListing";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" exact Component={ProductListing} />
        <Route path="/product/:productId" exact Component={ProductDetails} />
        <Route>Error 404</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
