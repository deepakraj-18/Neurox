import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import servicesImage from '../../assest/EMG.png';
import EMGCard from '../../assest/EMGCard.png';
import NCVCard from '../../assest/NCVCard.png';
import EMGImg from '../../assest/EMGImg.png';
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
    const navigate=useNavigate();

    return (
      <>
        <NavbarTwo />
            <Container>
                <Box sx={{ textAlign: 'center', my: 14 }}>
                    <Typography variant="h2" gutterBottom>
                    EMG
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "22px" }}>
                    Imagine understanding exactly how a customer feels, moment by moment, as they  interact with a mobile app, website, or advertisement—joy and surprise, fear and  disgust. It's facial coding, not science fiction.                       </Typography>
                </Box>
                <StyledImage sx={{my:4}} src={servicesImage} alt="Services" />
                <Box sx={{ my: 14 }}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
Through the use of facial coding, one can identify and categorise emotions as well  as their intensity by observing a person's facial expressions.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
A high-quality camera may be used to capture facial expressions with ease. For  example, a webcam will be recording the participant's facial expressions while they  complete a predetermined task on a website. Subsequently, the video will undergo  frame-by-frame analysis through advanced software, typically in tandem with a  recording of the participant's on-screen experience. Subsequently, the feelings the  person experienced while the task can be ascertained.                    </Typography>
                    </Box>
                    <Box>
                    <StyledImage sx={{my:4}} src={EMGImg} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
Wallace Friesen and Paul Ekman developed the renowned Facial Action Coding  System (FACS) in 1978. FACS is a guidebook for recognising and interpreting  minor changes in facial expressions to provide a psychological context.    
                </Typography>
                <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
It's a system built on classifying the entire body in addition to expression. Our  expressions never lie, thus using the FACS (Facial Action Coding System) is an  unfailing way to analyse emotional responses.Numerous neuromarketing studies  have shown that each (possible) client's first centre of attention is their face. We can  infer details and information from the face that can be used into marketing plans.This  method is frequently employed to comprehend people's emotional states, such as  those elicited by watching an advertisement.                </Typography>
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
