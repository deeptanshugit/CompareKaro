import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Component/navbar/navbar";
import Footer from "../Component/footer/footer";
import { Box } from "@mui/material";
import Navbar from "../Component/navbar/navbar";

function CompareKaroLayout() {
  return (
    <div style={{ position: "relative" }}>
      {/* <NavigationBar /> */}
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default CompareKaroLayout;
