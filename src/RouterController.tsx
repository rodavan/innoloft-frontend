import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductEdit from "./pages/ProductEdit";
import Home from "./pages/Home";

function RouterController() {
  return (
    <Router>
      <Routes>
        <Route
          path="/product/edit"
          element={<ProductEdit />}
        />
        <Route
          path="/product"
          element={<Product />}
        />
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default RouterController;
