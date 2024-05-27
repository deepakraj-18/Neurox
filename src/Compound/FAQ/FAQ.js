import React from 'react';
import NavbarTwo from '../NavbarTwo';
import FooterPage from '../FooterPage';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqItems = Array(8).fill("How Do I Add A New Question & Answer?");

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
        <Box sx={{ maxWidth: "800px", mx: "auto", mb: 4 ,border:"none"}}>
          {faqItems.map((item, index) => (
            <Accordion key={index} sx={{ mb: 1, borderTop: "1px solid #ccc",borderBottom: "1px solid #ccc" , boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is the answer to the question. You can replace this text with the actual answer.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <FooterPage />
    </>
  );
}

export default FAQ;
