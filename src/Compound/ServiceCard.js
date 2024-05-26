import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[4],
  },
}));

const ImageContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    width: '80px',
    height: '80px',
    borderRadius: '4px',
    visibility: 'hidden',
  },
  '&:hover img': {
    visibility: 'visible',
  },
});

const ServiceCard = ({ title, description, imageUrl,link }) => {
  const navigate=useNavigate();
  return (
    <StyledCard onClick={()=>navigate(link)}>
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Box display="flex" alignItems="center">
            <Box>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <IconButton color="primary">
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <ImageContainer>
            <img src={imageUrl} alt={title} />
          </ImageContainer>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ServiceCard;