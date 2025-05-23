"use client";
import React, { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import FeaturedBikeNavigation from "../FeaturedBikeNavigation/FeaturedBikeNavigation";
import TrendingBikeGallery from "../TrendingBikeGallery/TrendingBikeGallery";
const vehicleTabs = [
  { name: "TRENDING", href: "vehicleTrending" },
  { name: "POPULAR", href: "vehiclePopular" },
  { name: "ELECTRIC", href: "vehicleElectric" },
  { name: "UPCOMING", href: "vehicleUpcoming" },
];

function Featuredbike() {
  const [activeTab, setActiveTab] = useState("vehicleTrending");

  const handleSelectTab = (key) => {
    setActiveTab(key);

  };
  return (
    <div>
      <h3> Featured Bikes </h3>
      <div className="mb-2">
        <FeaturedBikeNavigation
          tabs={vehicleTabs}
          activeTab={activeTab}
          onSelectTab={(key) => handleSelectTab(key)}
        />
      </div>
      <div className="pt-2 mb-5">
        {activeTab === "vehicleTrending" && (
          <div>
            <Container>
              <TrendingBikeGallery />
            </Container>
          </div>
        )}
        {activeTab === "vehiclePopular" && (
          <div>
            <Container>
              <TrendingBikeGallery />
            </Container>
          </div>
        )}
        {activeTab === "vehicleElectric" && (
          <div>These are electric vehicle.</div>
        )}
        {activeTab === "vehicleUpcoming" && (
          <div>These are lsiting of upcoming vehicle.</div>
        )}
      </div>
    </div>
  );
}

export default Featuredbike;
