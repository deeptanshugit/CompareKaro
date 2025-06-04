import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";

const ProductCard = ({ products, onButtonClick, vehicle1, vehicle2 }) => {
  const product = products[0]; // Since we're now passing single products

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image1}
                sx={{
                  borderRadius: 1,
                  mb: 2,
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              ></CardMedia>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                {product.brand1}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {product.bike1}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image2}
                sx={{
                  borderRadius: 1,
                  mb: 2,
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              ></CardMedia>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold"
              >
                {product.brand2}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {product.bike2}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ px: 4, py: 1 }}
            onClick={() => {
              const slugify = (str) =>
                str &&
                str
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");

              //   navigate(`/comparisons/vechiles/${vehicleSlug}`);
            }}
          >
            {vehicle1} vs {vehicle2}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
