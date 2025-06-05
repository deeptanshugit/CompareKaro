import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: "rgb(3,133,122)",
  color: "rgb(3,133,122)",
  textTransform:"none",
  '&:hover': {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
    backgroundColor: 'transparent',
  },
}));

const OutlinedButton = ({ label, onClick, disabled = false, fullWidth = false, color }) => {
  return (
    <StyledButton
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      color={color}
    >
      {label}
    </StyledButton>
  );
};

export default OutlinedButton;
