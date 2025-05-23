// Footer.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import BrushIcon from "@mui/icons-material/Brush"; // Behance substitute
import EmailIcon from "@mui/icons-material/Email";
import { fontSize } from "../theme/fontsize";
import { fontWeight } from "../../Theme/fontWeight";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        p: 4,
        pt: 6,
        width: "100%",
      }}
    >
      <Grid container spacing={4}>
        {/* Logo and Email */}
        <Grid size={4}>
          <Box
            display="flex"
            width={"100%"}
            flexDirection="column"
            alignItems="flex-start"
            gap={2}
          >
            <img
              src="https://img.freepik.com/premium-vector/abstract-initial-letter-c-logo_740796-625.jpg" // replace with actual logo
              alt="The Granite"
              style={{ width: 50 }}
            />
            <Typography
              className="d-flex flex-column"
              sx={{
                fontWeight: "bold",
                color: "#D1A660",
                fontSize: fontSize.h2.medium,
              }}
            >
              Compare Karo{" "}
              <span
                style={{
                  fontSize: fontSize.h3.small,
                  color: "white",
                  fontWeight: fontWeight.W500,
                }}
              >
                Just Compare it
              </span>
            </Typography>
          </Box>
        </Grid>

        {/* Explore Links */}
        <Grid size={2}>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Explore
            </Typography>
            {["Home", "About us", "Blog Contact", "Our Team"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{ color: "#aaa", my: 0.5 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Menu Links */}
        <Grid size={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Menu
          </Typography>
          {["Gallery", "Our Blog", "FAQ's", "Contact"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ color: "#aaa", my: 0.5 }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Help & Support Links */}
        <Grid size={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Help & Support
          </Typography>
          {["Contact Us", "Help & FAQs", "Security Center"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{ color: "#aaa", my: 0.5 }}
            >
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Bottom line and credit */}
      <Divider sx={{ my: 4, backgroundColor: "#222" }} />
      <Typography variant="body2" align="center" sx={{ color: "#888" }}>
        Created By @Harshbsdwala
      </Typography>
    </Box>
  );
};

export default Footer;
