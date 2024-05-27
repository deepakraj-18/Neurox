import React from 'react';
import { Card, Typography, Box, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // padding: theme.spacing(2),
  // marginBottom: theme.spacing(2),
  borderBottom: `1px solid black`,
  borderRadius:0,
  boxShadow: 'none',
  '&:hover': {
    background: 'linear-gradient(to right, white, #E6F6FF, white)',
  },
  '&:hover img': {
    visibility: 'visible',
  },
  '&:hover .icon': {
    display: 'block',
    borderRadius: '50%',
    background: '#09a4fc',
    fill: '#fff',
    transform: 'rotate(-15deg)',
  },
}));

const ImageContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    width: '140px',
    // borderRadius: '4px',
    visibility: 'hidden',
  },
});

const ServiceCard = ({ title, description, imageUrl, link }) => {
  const navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate(link)}>
      <Grid container alignItems="center" sx={{ display: "flex" }}>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Box display="flex" alignItems="center" sx={{ width: "100%" }}>
            <Box sx={{ width: "30%" }}>
              <Typography variant="h4">{title}</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mx: 2, width: "30%" }}>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Box>
            <Box sx={{ width: "10%" }}>
              <ImageContainer>
                <img src={imageUrl} alt={title} />
              </ImageContainer>
            </Box>
            <Box sx={{ ml: 2 , marginLeft:'40px'}}>
              <IconButton color="primary" className="icon">
                <EastRoundedIcon className="icon" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ServiceCard;
