import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
