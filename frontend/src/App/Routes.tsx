import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth";
import { PageError } from "../components/PageError.tsx";
import { Main } from "../Main";
import { Navbar } from "../components/Navbar";
import Search from "../Search";
import Bookmarks from "../Bookmarks";
import Settings from "../Settings";

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search/*' element={<Search />} />
      <Route path='/bookmarks' element={<Bookmarks />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/authenticate' element={<Auth />} />
      <Route element={<PageError />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
