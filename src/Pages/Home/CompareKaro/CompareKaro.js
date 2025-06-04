import { Col, Row } from "react-bootstrap";
import styles from "./CompareKaro.module.css";
import { Typography, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { fontSize } from "../../../Theme/fontsize";
import ProductCarousel from "../../../Component/ProductCarousel/ProductCarousel";
import BlogList from "../../../Component/BlogList/BlogList";
import BlogPost from "../../../Component/BlogPost/BlogPost";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CompareKaro() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const products = [
    {
      id: 1,
      image1: "/Images/Bikes/RoyalEnfield/Classic 350 Transparent.png",
      image2: "/Images/Bikes/HondaCB350/Honda CB350 Transparent.png",
      brand1: "Royal Enfield",
      brand2: "Honda",
      bike1: "Classic 350",
      bike2: "CB350",
      fullVehicle1: "Royal Enfield Classic 350",
      fullVehicle2: "Honda CB350",
    },
    {
      id: 2,
      image1: "/Images/Bikes/Yamaha/Yamaha MT15 V2.png",
      image2: "/Images/Bikes/Yamaha/Yamaha R15 V4.png",
      brand1: "Yamaha",
      brand2: "Yamaha",
      bike1: "MT15",
      bike2: "R15",
      fullVehicle1: "Yamaha MT15",
      fullVehicle2: "Yamaha R15",
    },
    {
      id: 3,
      image1: "/Images/Bikes/RoyalEnfield/Classic 350 Transparent.png",
      image2: "/Images/Bikes/RoyalEnfield/Hunter 350.png",
      brand1: "Royal Enfield",
      brand2: "Royal Enfiled",
      bike1: "Classic 350",
      bike2: "Hunter 350",
      fullVehicle1: "Royal Enfield Classic 350",
      fullVehicle2: "Royal Enfield Hunter 350",
    },
    {
      id: 4,
      image1: "/Images/Bikes/RoyalEnfield/Continental GT.png",
      image2: "/Images/Bikes/RoyalEnfield/Interceptor GT.png",
      brand1: "Royal Enfield",
      brand2: "Royal Enfiled",
      bike1: "Continental GT 650",
      bike2: "Interceptor 650",
      fullVehicle1: "Royal Enfield Continental GT 650",
      fullVehicle2: "Royal Enfield Interceptor 650",
    },
    {
      id: 5,
      image1: "/Images/Bikes/RoyalEnfield/Classic 350 Transparent.png",
      image2: "/Images/Bikes/RoyalEnfield/Hunter 350.png",
      brand1: "Royal Enfield",
      brand2: "Royal Enfiled",
      bike1: "Classic 350",
      bike2: "Hunter 350",
      fullVehicle1: "Royal Enfield Classic 350",
      fullVehicle2: "Royal Enfield Hunter 350",
    },
    {
      id: 6,
      image1: "/Images/Bikes/RoyalEnfield/Continental GT.png",
      image2: "/Images/Bikes/RoyalEnfield/Interceptor GT.png",
      brand1: "Royal Enfield",
      brand2: "Royal Enfiled",
      bike1: "Continental GT 650",
      bike2: "Interceptor GT 650",
      fullVehicle1: "Royal Enfield Continental GT 650",
      fullVehicle2: "Royal Enfield Interceptor GT 650",
    },
  ];

  const [selectedSlug, setSelectedSlug] = useState(null);
  const navigate = useNavigate();

  const handleSelectPost = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.mainContainer}>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div>
              <Typography fontSize={fontSize.h1.medium} fontWeight={700}>CompareKaro</Typography>
            </div>
            <div className={styles.textTyping}>
              <p>Just compare it.</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.cardContainer}>
              <Typography fontSize={fontSize.h2.medium} fontWeight={600}>
                Popular Comparisons
              </Typography>
              <ProductCarousel products={products}></ProductCarousel>
            </div>
          </Col>
        </Row>
        <BlogList onSelectPost={handleSelectPost} />
      </div>
    </ThemeProvider>
  );
}
