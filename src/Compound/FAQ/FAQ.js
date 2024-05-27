import React from 'react';
import NavbarTwo from '../NavbarTwo';
import FooterPage from '../FooterPage';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const FAQ = () => {
  const faqItems = Array(8).fill("How Do I Add A New Question & Answer?");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <NavbarTwo />
      <Container>
        <Box sx={{ textAlign: 'center', my: 20 }}>
          <Typography variant="h2" gutterBottom>
            FAQ
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "24px" }}>
            Electroencephalography, or EEG for short, is one of the most widely used methodologies used by neuromarketers today.
          </Typography>
          <Box sx={{ height: "50px", width: "600px", backgroundColor: "#D9D9D9", borderRadius: "5px", marginTop: "70px", mx: "auto" }} />
        </Box>
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h4">
            Frequently Asked Questions
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "800px", mx: "auto", mb: 4, border: "none" }}>
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
                <Typography sx={{ color: expanded === `panel${index}` ? '#07A3FC' : 'inherit' }}>{item}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',marginLeft:"290px" }}>
                <Typography sx={{color:"#5F5F5F"}}>
                  In neuromarketing research, event-related potentials (ERPs) have been applied sporadically. Although they are more difficult to explain to nonscientists, some have theorized that this is because they are harder to study and necessitate greater data gathering.
                </Typography>
                {/* <IconButton>
                  <CloseIcon />
                </IconButton> */}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Typography variant='h4' textAlign="center" m={8}>Don't just take their word for it.</Typography>
        <Typography textAlign="center" mx={20} fontSize={20}>Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging,
          Ad Campaigns, and Brand Recognition</Typography>
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <button style={{ backgroundColor: "#07A3FC", borderRadius: "30px", height: "40px", width: "180px", border: "1px solid #07A3FC", color: "white" }}>Our Work</button>
        </Box>
      </Container>
      <FooterPage />
    </>
  );
}

export default FAQ;
