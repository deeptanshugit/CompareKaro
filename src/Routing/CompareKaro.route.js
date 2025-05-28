import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompareKaroLayout from "../Layout/CompareKaro.layout";
import Phone from "../Pages/PhoneComparison/Phone";
import CompareKaro from "../Pages/Home/CompareKaro/CompareKaro";

const CompareKaroRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<CompareKaroLayout />}>
            <Route path="/" element={<CompareKaro />}></Route>
            <Route path="/comparisons/vechiles/:vehicleSlug" element={<Phone />} />
            <Route path="/comparekaro" element={<CompareKaro />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default CompareKaroRoute;
