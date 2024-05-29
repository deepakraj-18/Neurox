import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import servicesVideo from '../../assest/EEGgif.png';
import Doc from '../../assest/frontal.png';
import Brainwave from '../../assest/Brainwave.png';
import ERP from '../../assest/ERP.png';
import EMGCard from '../../assest/EMGCard.png';
import NCVCard from '../../assest/NCVCard.png';
import NavbarTwo from '../NavbarTwo';
import { useNavigate } from 'react-router-dom';
import FooterPage from '../FooterPage';



const StyledGif = styled('img')({
    width: '100%',
    borderRadius: '8px',
});

const StyledImage = styled('img')({
    width: '100%',
    borderRadius: '8px'
});

const cardsData = [
    {
        image: EMGCard,
        title: 'EMG',
    },
    {
        image: NCVCard,
        title: 'NCV',
    },
    
];

export default function EEG() {
    const navigate=useNavigate();

    return (
      <>
        <NavbarTwo />
            <Container>
                <Box sx={{ textAlign: 'center', my: 14 }}>
                    <Typography variant="h2" gutterBottom>
                    EEG
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "22px" }}>
                    Electroencephalography, or EEG for short, is one of the most widely used methodologies used by  neuromarketers today.                    </Typography>
                </Box>
                <StyledGif src={servicesVideo} alt="Neurodesign GIF" />
                <Box sx={{ my: 14 }}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Brain activity is measured by EEG by detecting and amplifying weak electrical impulses  continuously released by the brain and called brainwaves. Our brain uses these electrical impulses  to coordinate activity across many anatomical regions and to interact with one another. Brainwave  activity variations are markers of shifts in cognitive processing. Compared to other measurement  technologies used in neuromarketing, modern EEG equipment has a higher temporal resolution by  taking a snapshot of brainwave activity every 1-3 thousandth of a second. Voltage variations or  electrical potentials are produced throughout the scalp when tens of thousands of neurons fire  simultaneously. In neuroscience research, three primary EEG measurement methods are frequently  employed: event-related potential analysis, hemisphere asymmetry analysis (a frequency analysis  application), and brainwave frequency analysis. While only one of these is primarily the focus of  neuromarketing today, the others provide enormous promise for investigating customer responses  as well. They each highlight a distinct feature of the EEG signal and have advantages and  disadvantages when it comes to using them as a measurement method to address neuromarketingrelated inquiries.
                    </Typography>
                    </Box>
                    <Box>
                    <Typography variant='h4' textAlign="center">
                    Frontal Hemisphere Asymmetry
                    </Typography>
                    <StyledImage sx={{my:4}} src={Doc} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Neuromarketers use frontal hemisphere asymmetry as a proxy for approach-avoidance behaviour  towards brands and products. It has been discovered that frontal asymmetries represent quick,  subconscious motivating reactions to marketing stimuli such as television commercials, product  names, and physical goods. According to some studies, variations in frontal asymmetries that  happen as soon as 200 milliseconds after being exposed to a marketing stimulus may be better at  predicting a consumer's subsequent choice and behaviour than the consumer's own expressions of  their preferences or wants.
                    </Typography>
                    </Box>
                    <Box>
                    <Typography variant='h4' textAlign="center">
                    Brainwave Frequency Analysis                    </Typography>
                    <StyledImage sx={{my:4}} src={Brainwave} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
In market research, brainwave frequency analysis has a long history dating back to the 1970s.  More recent research has discovered interesting relationships between beta-band power and  product preferences and gamma-band power and marketplace success. Earlier attempts to correlate  responses to marketing stimuli with overall power in different frequency bands lacked clarity.  Sophisticated statistical methods have been used more recently to analyse brain coherence patterns  and summarise power; these methods have started to produce intriguing predictions of consumer  behaviour at both the individual and market performance levels. Examining "intersubject  synchrony" of brainwave activity while watching entertainment or commercial items has proven  to be one useful application. This statistic has been shown in recent research to be predictive of  both instant engagement and eventual performance in the marketplace.                    </Typography>
                    </Box>
                    <Box>
                    <Typography variant='h4' textAlign="center">
                    Event-Related Potentials (ERP)                 
                    </Typography>
                    <StyledImage sx={{my:4}} src={ERP} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
In neuromarketing research, event-related potentials (ERPs) have been applied sporadically.  Although they are more difficult to explain to nonscientists, some have theorised that this is  because they are harder to study and necessitate greater data gathering, more exact experimental  designs, and more advanced analytical techniques in order to draw conclusions. Despite these  obstacles, ERP studies have a great deal of potential for neuromarketing. For instance, the N200  component has been used to forecast product purchase preferences, while the P300 ERP  component has been used to evaluate brand associations, such as whether a new brand extension  aligns with current brand expectations.                    
</Typography>   
                </Box>
                <Box sx={{ flexGrow: 1, padding: 2 }}>
                    <Grid container spacing={2} justifyContent="space-evenly">
                        {cardsData.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                                <Card sx={{ maxWidth: 370, borderRadius: 2, position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={card.image}
                                        alt={card.title}
                                        sx={{ position: 'relative' }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            bgcolor: 'rgba(0, 0, 0, 0.6)',
                                            color: 'white',
                                            textAlign: 'center',
                                            py: 1,
                                        }}
                                    >
                                        <Typography variant="body2" component="p">
                                            {card.title}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography variant='h4' textAlign="center" my={2} mx={8}>Don't just take their word for it.</Typography>
            <Typography textAlign="center" mx={44} fontSize={20}>Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging,
                Ad Campaigns, and Brand Recognition</Typography>
            <Box sx={{ textAlign: 'center', my: 2}}>
                <button style={{ backgroundColor: "#07A3FC", borderRadius: "30px", height: "40px", width: "180px", border: "1px solid #07A3FC", color: "white" }}>Our Work</button>
            </Box>
            </Container>
            <FooterPage />

        </>
    )
}
