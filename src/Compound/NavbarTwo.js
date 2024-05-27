import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import logo from '../assest/Neuro x final png 4.png';
import { Container, Grid, Link, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../data/logo.png'

const ToolbarContainer = styled(Toolbar)({
  justifyContent: 'space-between',
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  
}));

const NavbarTwo = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="default" style={{ boxShadow: "none" }}>
        <ToolbarContainer>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="NeuroX Logo" style={{ height: '50px' }} onClick={() => navigate("/home")} />
          </Box>
          <NavLinks >
            {[{ text: 'Services', link: "/services" }, { text: 'Technology', link: "/technology" }, { text: 'Lab', link: "/labs" }, { text: 'Case Studies', link: "/case" }, { text: 'Blog', link: "/services" }, { text: 'Events/Resources', link: "/event" }, { text: 'FAQs', link: "/services" }, { text: 'About Us', link: "/about" }, { text: 'Contact', link: "/contact" }].map((item, index) => (
              <div key={index + 1} style={{ display: "flex", flexDirection: "column" }}>
                <Button  className='nav-link-active'  key={item.text} color="inherit" onClick={() => navigate(item?.link)} > {item.text}</Button>
                <hr style={{ width: "50px", height: "0.5px",background:"#09a4fc"}}></hr>
              </div>
            ))}
          </NavLinks>
          <IconButton edge="end" color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </ToolbarContainer>
      </AppBar >

    </>
  );
};

export default NavbarTwo;