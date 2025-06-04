// Navbar.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';
import TranslateIcon from '@mui/icons-material/Translate';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Logo & Hamburger */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', color: '#000' }}>
              CompareKaro
            </Typography>
          </Box>
        </Box>

        {/* Center: Search */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              borderRadius: 2,
              px: 2,
              py: 0.5,
              width: '40%',
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{ flex: 1, color: '#333' }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon sx={{ color: '#777' }} />
          </Box>
        )}

        {/* Right side: Icons and Log In */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <RoomIcon />
          </IconButton>
          <IconButton>
            <TranslateIcon />
          </IconButton>
          <Button variant="text" sx={{ textTransform: 'none', fontWeight: 500 }}>
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
