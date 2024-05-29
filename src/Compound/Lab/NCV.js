import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import servicesImage from '../../assest/NCVImg.png';
import EMGCard from '../../assest/EMGCard.png';
import NCVCard from '../../assest/NCVCard.png';
import EMGImg from '../../assest/EMGImg.png';
import Metrics from '../../assest/Metris.png';
import NavbarTwo from '../NavbarTwo';
import { useNavigate } from 'react-router-dom';
import FooterPage from '../FooterPage';


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
    const navigate = useNavigate();

    return (
        <>
            <NavbarTwo />
            <Container>
                <Box sx={{ textAlign: 'center', my: 14 }}>
                    <Typography variant="h2" gutterBottom>
                        NCV
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "22px" }}>
                        Today, eye trackers study attention in various research situations, including internet, advertising,  and customer experience.
                    </Typography>
                </Box>
                <StyledImage sx={{ my: 4 }} src={servicesImage} alt="Services" />
                <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "22px" }}>
                    The eye tracking method is frequently used in neuromarketing studies because it is highly  integratable with other methods like facial coding, galvanic response of the skin (GSR) detection,  electroencephalography (EEG), electrocardiography (ECG), plethysmography (PPG), and others.  Additionally, it enables interpretation of all the data from other methods in the context of what the  subject of the study is seeing at any given time.                       </Typography>
                <Box sx={{ my: 14 }}>
                    <Typography variant='h4' textAlign="center">
                        Metrics and Data for Eye Tracking - Neuromarketing
                    </Typography>
                    <StyledImage sx={{ my: 4 }} src={Metrics} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        One can extract signs pertaining to fixations, saccades, pupil diameter, and ocular blinks by  analysing the eye tracking recordings.               </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        It's a system built on classifying the entire body in addition to expression. Our  expressions never lie, thus using the FACS (Facial Action Coding System) is an  unfailing way to analyse emotional responses.Numerous neuromarketing studies  have shown that each (possible) client's first centre of attention is their face. We can  infer details and information from the face that can be used into marketing plans.This  method is frequently employed to comprehend people's emotional states, such as  those elicited by watching an advertisement.
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
