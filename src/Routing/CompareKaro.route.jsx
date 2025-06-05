import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompareKaroLayout from "../Layout/CompareKaro.layout";
import CompareKaro from "../Pages/Home/CompareKaro/CompareKaro";
import Demo from "../Pages/Demo/Demo";
import Bike from "../Pages/BikeComparison/Bike";
import BlogPost from "../Component/BlogPost/BlogPost";

const CompareKaroRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<CompareKaroLayout />}>
            <Route path="/" element={<CompareKaro />}></Route>
            <Route path="/blog/:slug" element={<BlogPost />}></Route>
            <Route path="/comparisons/vehicles/:vehicleSlug" element={<Bike />} />
            <Route path="/comparekaro" element={<CompareKaro />} />
            <Route path="/demo" element={<Demo />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default CompareKaroRoute;
