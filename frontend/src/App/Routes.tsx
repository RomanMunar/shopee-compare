import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Auth from "../Auth/Auth";
import { PageError } from "../components/PageError.tsx";
import { Main } from "../Main";

const history = createBrowserHistory();
const BrowserRoutes = () => (
  <BrowserRouter>
    <div>
      <div>Navbar</div>
      <div>Side</div>
    </div>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/authenticate' element={<Auth />} />
      <Route element={<PageError />} />
    </Routes>
  </BrowserRouter>
);

export default BrowserRoutes;
