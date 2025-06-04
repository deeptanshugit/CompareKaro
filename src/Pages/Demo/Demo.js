import React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import ProductCard from "./ProductCard";
// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const Demo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      image1: "/Images/Bikes/RoyalEnfield/Classic 350 Transparent.png",
      image2: "/Images/Bikes/HondaCB350/Honda CB350 Transparent.png",
      brand1: "Royal Enfield",
      brand2: "Honda",
      bike1: "Classic 350",
      bike2: "CB350",
    },
    {
      id: 2,
      image1: "/Images/Bikes/Yamaha/Yamaha MT15 V2.png",
      image2: "/Images/Bikes/Yamaha/Yamaha R15 V4.png",
      brand1: "Yamaha",
      brand2: "Yamaha",
      bike1: "MT15",
      bike2: "R15",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      brand: "Sunglasses",
      description: "Stylish eyewear with UV protection and modern design",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      brand: "Handbag",
      description: "Luxury leather handbag perfect for everyday use and special occasions",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      brand: "Headphones",
      description: "Wireless headphones with noise cancellation and premium sound quality",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
      brand: "Smartphone",
      description: "Latest generation smartphone with advanced camera and performance",
    },
  ];

  const cardsPerView = 3; // Show 3 cards at a time
  const maxIndex = Math.max(0, products.length - cardsPerView);

  const handleShopNow = () => {
    console.log("Shop Now button clicked!");
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: '#f5f5f5',
        p: 3
      }}>
        <Box sx={{ position: 'relative', maxWidth: '1200px', width: '100%' }}>
          {/* Previous Button */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'grey.100',
              },
              zIndex: 1,
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Product Cards Container */}
          <Box sx={{ 
            overflow: 'hidden',
            borderRadius: 2,
          }}>
            <Box sx={{
              display: 'flex',
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              transition: 'transform 0.3s ease-in-out',
              width: `${(products.length / cardsPerView) * 100}%`
            }}>
              {products.map((product) => (
                <Box key={product.id} sx={{ 
                  flex: `0 0 ${100 / cardsPerView}%`,
                  px: 1
                }}>
                  <ProductCard
                    products={[product]}
                    onButtonClick={handleShopNow}
                    buttonText="Shop Now"
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Next Button */}
          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'grey.100',
              },
              zIndex: 1,
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* Dots Indicator */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 3, 
            gap: 1 
          }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: currentIndex === index ? 'primary.main' : 'grey.300',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    bgcolor: currentIndex === index ? 'primary.dark' : 'grey.400',
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Demo;