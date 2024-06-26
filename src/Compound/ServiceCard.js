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
    border:"none",
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
    height:'100px'
  },
});

const ServiceCard = ({ title, description, imageUrl, link }) => {
  const navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate(link)}>
      <Grid container sx={{}}>
        <Grid item xs={12} sx={{ }}>
          <Box display="flex" alignItems="center"  gap={5} sx={{ width: "100%",height:"100px" }}>
            <Box sx={{width:'20%' }}>
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
              <IconButton className="icon">
                <EastRoundedIcon className="icon" sx={{color:"gray",borderRadius:'50%',border:'1px solid gray'}}/>
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ServiceCard;
