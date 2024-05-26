import React from 'react';
import { TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Container, Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import { Phone, Email, LocationOn, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Contact = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2">Hi there! Can't find what you need?</Typography>
          <Typography variant="h5" my={2} mx={2}>
            Please get in touch and our support team will answer all your questions. You can send a message to <span style={{color:"#07A3FC"}}>neurox.co.uk</span>
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', display: 'flex' }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} style={{ background: '#07A3FC', color: 'white', padding: '20px',borderRadius:"10px" }}>
              <Typography variant="h4" >Contact Information</Typography>
              <Typography variant="body1" sx={{color:"#C9C9C9"}}>Say something to start a live chat!</Typography>
              <Box my={10}>
                <Typography variant="body1" my={2}>
                <Phone sx={{color:"white"}}/> +44 7564 522241
                </Typography>
                <Typography variant="body1" my={4}>
                   <Phone /> +44 7503 672001
                </Typography>
                <Typography variant="body1" my={4}>
                  <Email sx={{color:"white"}} /> contact@neurox.co.uk
                </Typography>
                <Typography variant="body1" my={4}>
                  <LocationOn sx={{color:"white"}}/> 20 Wenlock Road, London, N1 7GU
                </Typography>
              </Box>
              <Box mt={2} sx={{display: 'flex',gap:2}}>
                <IconButton color="inherit" sx={{backgroundColor:"white",borderRadius:"50px",height:"30px",width:"30px"}}>
                  <Facebook sx={{color:"black"}}/>
                </IconButton>
                <IconButton color="inherit" sx={{backgroundColor:"white",borderRadius:"50px",height:"30px",width:"30px"}}>
                  <Twitter  sx={{color:"black"}}/>
                </IconButton>
                <IconButton color="inherit" sx={{backgroundColor:"white",borderRadius:"50px",height:"30px",width:"30px"}}>
                  <LinkedIn  sx={{color:"black"}}/>
                </IconButton>
                <IconButton color="inherit" sx={{backgroundColor:"white",borderRadius:"50px",height:"30px",width:"30px"}}>
                  <Instagram  sx={{color:"black"}}/>
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: '20px' }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    InputProps={{ sx: { borderBottom: '1px solid #8D8D8D' } }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    InputProps={{ sx: { borderBottom: '1px solid #8D8D8D' } }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    InputProps={{ sx: { borderBottom: '1px solid #8D8D8D' } }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    variant="standard"
                    InputProps={{ sx: { borderBottom: '1px solid #8D8D8D' } }}
                  />
                </Grid>
              </Grid>
              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Select Subject?</FormLabel>
                <RadioGroup row defaultValue="general">
                  <FormControlLabel value="general" control={<Radio />} label="General Inquiry" />
                  <FormControlLabel value="seals" control={<Radio />} label="Seals Inquiry" />
                  <FormControlLabel value="job" control={<Radio />} label="Job Inquiry" />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                variant="standard"
                placeholder="Write your message..."
                InputProps={{ sx: { borderBottom: '1px solid #8D8D8D' } }}
              />
              <Grid item xs={12}>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </Grid>
    </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Box sx={{ textAlign: 'center', my: 20, mx: 20 }}>
                <Typography variant="h3">
                Don’t just take their word for it.
                                </Typography>
                <Typography variant="h6" sx={{ color: "gray", fontSize: "20px", marginTop: "100px" }}>
                    Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging, Ad Campaigns, and Brand Recognition
                </Typography>
            </Box>
      </Container>
    </>
  );
};

export default Contact;
