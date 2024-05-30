import React from 'react';
import NavbarTwo from '../NavbarTwo';
import FooterPage from '../FooterPage';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Card, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const FAQ = () => {
  const faqItems = [
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    },
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    },
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    },
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    },
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    },
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    },
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    },
    {
      "text": "How Do I Add A New Question & Answer?",
      "description": "In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering."
    }
  ];
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    borderBottom: `1px solid black`,
    borderRadius: 0,
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

  const FAQCard = ({ title, description, imageUrl, link }) => {
    const navigate = useNavigate();
    return (
      <StyledCard onClick={() => navigate(link)} className='faq-container'>
        <Grid container alignItems="center" sx={{ display: "flex" }}>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Box alignItems="center" display="flex" sx={{ width: "100%" }}>
              <Box alignItems="center" sx={{ width: "50%", display:"flex" }}>
                <Typography variant="p" sx={{ fontSize: "1rem", fontWeight: 400, width: "100%" }} className='faq-container-text'>{title}</Typography>
              </Box>
              <Box alignItems="center" sx={{ width: "50%",mt:2 }}>
                <Typography variant="p" color="textSecondary" sx={{ textAlign: "right" }} className='faq-container-description'>
                  {description}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {/* <CloseIcon sx={{}} className='faq-container-closeIcon' /> */}
              <AddIcon sx={{}} className='faq-container-openIcon' />
            </Box>

            {/* <Box sx={{ width: "10%" }}>
                <ImageContainer>
                  <img src={imageUrl} alt={title} />
                </ImageContainer>
              </Box>
              <Box sx={{ ml: 2, marginLeft: '40px' }}>
                <IconButton color="primary" className="icon">
                  <EastRoundedIcon className="icon" />
                </IconButton>
              </Box> */}
          </Grid>
        </Grid>
      </StyledCard >
    );
  };
  return (
    <>
      <NavbarTwo />
      <Container fontFamily={"Arimo"}>
        <Box sx={{ textAlign: 'center', my: 20 }}>
          <Typography variant="h2" gutterBottom>
            FAQ
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "24px" }}>
            Electroencephalography, or EEG for short, is one of the most widely used methodologies used by neuromarketers today.
          </Typography>
        </Box>
        <Box sx={{ height: "50px", width: "600px", mx: "auto",marginTop:'-40px',backgroundColor:"#D9D9D9",borderRadius:"25px",display:"flex",flexDirection:"row-reverse" }}>
          <SearchIcon sx={{ color: "black",margin: "auto 10px auto 0px" }} />
          {/* <Typography>What are you looking for?</Typography> */}
          </Box>
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h4">
            Frequently Asked Questions
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "800px", mx: "auto", mb: 4, border: "none" }}>
          {faqItems?.map((item, index) => (
            <FAQCard title={item?.text} description={item?.description}></FAQCard>
          ))}
        </Box>
        {/* <Box sx={{ maxWidth: "800px", mx: "auto", mb: 4, border: "none" }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ mb: 1, borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={expanded === `panel${index}` ? <CloseIcon /> : <AddIcon />} // Changed here
                sx={{ '& .MuiAccordionSummary-content': { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }}
              >
                <Typography sx={{ color: expanded === `panel${index}` ? '#07A3FC' : 'inherit' }}>{item.text}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginLeft: "290px" }}>
                <Typography sx={{ color: "#5F5F5F" }}>
                  In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering.
                </Typography>
                
              </AccordionDetails>
            </Accordion>
          ))}
        </Box> */}
        <Typography variant='h4' textAlign="center" fontFamily={"Arimo"} marginTop={10} mx={8}>Don't just take their word for it.</Typography>
            <Typography textAlign="center" mx={26} fontSize={20} fontFamily={"Arimo"}>Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging,
                Ad Campaigns, and Brand Recognition</Typography>
            <Box sx={{ textAlign: 'center', mt: 2,mb:20}}>
                <button style={{ backgroundColor: "#07A3FC", borderRadius: "30px", height: "40px", width: "180px", border: "1px solid #07A3FC", color: "white" }}>Our Work</button>
            </Box>
      </Container>
      <FooterPage />
    </>
  );
}

export default FAQ;
