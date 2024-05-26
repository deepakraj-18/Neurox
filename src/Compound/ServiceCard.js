import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  // transition: 'transform 0.3s ease-in-out',
  // '&:hover': {
  //   transform: 'scale(1.02)',
  //   boxShadow: theme.shadows[4],
  // },
  '&:hover img': {
    visibility: 'visible',
  },
  '&: hover .icon': {
    display: "block",
    borderRadius: "50%",
    background: "#09a4fc",
    fill: "#fff",
    transform: 'rotate(-15deg)',

  }
}));

const ImageContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    width: '80px',
    height: '80px',
    borderRadius: '4px',
    visibility: 'hidden',
  }
});

const ServiceCard = ({ title, description, imageUrl, link }) => {
  const navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate(link)}>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Box style={{ width: "30%" }}>
              <Typography variant="h5">{title}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Box>
            <Box>
              <ImageContainer>
                <img src={imageUrl} alt={title} />
              </ImageContainer>
            </Box>
            <Box>
              <IconButton color="primary" className='icon'>
                <EastRoundedIcon className='icon'></EastRoundedIcon>
              </IconButton>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item xs={2}>
          <IconButton color="primary">
            <ArrowForwardIcon />
          </IconButton>
        </Grid> */}
        {/* <Grid item xs={12}>
          <ImageContainer>
            <img src={imageUrl} alt={title} />
          </ImageContainer>
        </Grid> */}
      </Grid>
    </StyledCard>
  );
};

export default ServiceCard;