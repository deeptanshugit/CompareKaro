"use client";
import { Row, Container, Col } from "react-bootstrap";
import styles from "./BrandSelector.module.css";
import FeaturedBikeNavigation from "../FeaturedBikeNavigation/FeaturedBikeNavigation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const brandLogos = [
  {
    name: "Ather",
    logo: "/brands/Ather.png",
    to: "/ather/scooters",
  },
  {
    name: "Ola",
    logo: "/brands/Ola.png",
    to: "/ola/scooters",
  },
  {
    name: "Ampere",
    logo: "/brands/Ampere.png",
    to: "/ampere/scooters",
  },
];

const brandTabs = [
  { name: "BRAND", href: "vehicleBrand" },
  { name: "BUDGET", href: "vehicleBudget" },
  { name: "DISPLACEMENT", href: "vehicleDisplacement" },
  { name: "BODY STYLE", href: "vehicleStyle" },
];

const BrandSelector = () => {
  const router = useNavigate();

  const handleImageClick = (to) => {
    router.push(to);
  };

  const [activeTab, setActiveTab] = useState("vehicleBrand");

  const handleSelectTab = (key) => {
    setActiveTab(key);
  };
  return (
    <div>
      <h3> Browse EVs by </h3>
      <div className="mb-2">
        <FeaturedBikeNavigation
          tabs={brandTabs}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />
      </div>
      <div className="pt-2 mb-5">
        {activeTab === "vehicleBrand" && (
          <div>
            <Container>
              <Row>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/TVS.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/Ather.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/Ola.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/Gogoro.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/Bajaj.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/HeroElectric.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/Okaya.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/OkinawaLogo.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/Vida.png"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={2}
                  xs={2}
                  className={styles.imageContainer}
                >
                  <div>
                    <img
                      src={"/brands/JoyeBike.jpeg"}
                      alt="image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {activeTab === "vehicleBudget" && <div>budget</div>}
        {activeTab === "vehicleDisplacement" && <div>displacement</div>}
        {activeTab === "vehicleStyle" && <div>style</div>}
      </div>
    </div>
  );
};

export default BrandSelector;
