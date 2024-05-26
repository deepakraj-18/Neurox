import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import logo from '../assest/Neuro x final png 4.png'; 
import { Container, Grid, Link, Typography, Box } from '@mui/material';

const ToolbarContainer = styled(Toolbar)({
    justifyContent: 'space-between',
  });
  
  const NavLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
  }));
  
  const Navbar = () => {
  
    return (
      <>
        <AppBar position="static" color="default">
          <ToolbarContainer>
            <Box sx={{ flexGrow: 1 }}>
              <img src={logo} alt="NeuroX Logo" style={{ height: '50px' }} />
            </Box>
            <NavLinks>
              {['Services', 'Technology', 'Lab', 'Case Studies', 'Blog', 'Events/Resources', 'FAQs', 'About Us', 'Contact'].map((text) => (
                <Button key={text} color="inherit">{text}</Button>
              ))}
            </NavLinks>
            <IconButton edge="end" color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </ToolbarContainer>
        </AppBar>
        </>
  );
};

export default Navbar;