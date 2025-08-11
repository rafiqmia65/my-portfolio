import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import CustomCursor from "../pages//shared//CustomCursor/CustomCursor";

const MainLayouts = () => {
  return (
    <div>
      <CustomCursor></CustomCursor>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayouts;
