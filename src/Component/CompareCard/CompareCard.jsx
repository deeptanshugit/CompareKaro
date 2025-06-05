import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CompareCard({ vehicle1, vehicle2 }) {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: "70%", margin: "0 auto", borderRadius: 2 }}
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
                height="250"
                image="/Images/Bikes/RoyalEnfield/Classic 350 Transparent.png"
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
                Honda
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                CB 350
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
                height="250"
                image="/Images/Bikes/HondaCB350/Honda CB350 Transparent.png"
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
                Royal Enfield
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Classic 350
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
                str && str
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");

              // const fullVehicle1 = "Honda CB350";
              // const fullVehicle2 = "Royal Enfield Meteor 350";

              const vehicleSlug = `${slugify(vehicle1)}-vs-${slugify(
                vehicle2
              )}`;

              navigate(`/comparisons/vechiles/${vehicleSlug}`);
            }}
          >
            {vehicle1} vs {vehicle2}
          </Button>
        </Box>
        
      </CardContent>
    </Card>
  );
}
