import React from "react";
import { Col, Row } from "react-bootstrap";
import VehicleSearch from "../../Component/VehicleSearch/VehicleSearch";
import Featuredbike from "../../Component/FeaturedBike/FeaturedBike";
import "./HomePage.module.css";
function Home() {
  return (
    <div>
      {" "}
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="container">
            <div className="overlay">
              <h3>Find the right electric vehicle</h3>
              <h4>Get comprehensive information on electric vehicles</h4>
              <VehicleSearch />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="container">
            <Featuredbike />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
