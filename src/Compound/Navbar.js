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

// const ToolbarContainer = styled(Toolbar)({
//     justifyContent: 'space-between',
//   });
  
//   const NavLinks = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     gap: theme.spacing(3),
//   }));
  
  const Navbar = () => {
    const navigate = useNavigate();
  
    return (
      <>
        {/* <AppBar position="static" color="default">
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
        </AppBar> */}
        <div className='appearing-box'>
        <div className='neuox-contain'>
          <div className='neuox-contain-1'>
            <img src={Logo} alt='Logo' className='neuox-contain-img' />
          </div>
          <div className='neuox-contain-2'>
            <div className="tabs">
              <div className="tab" onClick={() => navigate("/services")}>Services</div>
              <div className="tab" onClick={() => navigate("")}>Product</div>
              <div className="tab" onClick={() => navigate("technology")}>Technology</div>
              <div className="tab" onClick={() => navigate("")}>Research</div>
              <div className="tab" onClick={() => navigate("case")}>Case Studies</div>
              <div className="tab" onClick={() => navigate("event")}>Events/Resources</div>
              <div className="tab" onClick={() => navigate("")}>FAQs</div>
              <div className="tab" onClick={() => navigate("about")}>About Us</div>
              <div className="tab" onClick={() => navigate("contact")}>Contact</div>
              <div className="tab"><SearchIcon sx={{ color: "white" }} /></div>
            </div>
          </div>
        </div>
      </div>
        </>
  );
};

export default Navbar;