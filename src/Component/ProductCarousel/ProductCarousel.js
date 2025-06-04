import React from "react";
import { Box, CssBaseline, ThemeProvider, createTheme, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
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

const ProductCarousel = ({products}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: '#fff',
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

export default ProductCarousel;