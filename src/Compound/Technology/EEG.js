import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import servicesVideo from '../../assest/Neuro.gif';
import Doc from '../../assest/Doc.png';
import NeuroBrand from '../../assest/neurobrand.png';
import NeuroPackaging from '../../assest/neuropackage.png';
import userExperience from '../../assest/userexperience.png';
import productTesting from '../../assest/ProductTesting.png';
import NeuroInfotech from '../../assest/neuroinfotech.png';
import { useNavigate } from 'react-router-dom';
import NavbarTwo from '../NavbarTwo';
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
        image: NeuroBrand,
        title: 'Neurobrand Testing',
    },
    {
        image: NeuroPackaging,
        title: 'Neuropackaging',
    },
    {
        image: userExperience,
        title: 'User Experience',
    },
    {
        image: productTesting,
        title: 'Product Testing',
    },
    {
        image: NeuroInfotech,
        title: 'Neuro- Info Development',
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
                        Neurodesign
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "22px" }}>
                        To help user experience specialists, creatives, advertisers, designers, and marketers—or anyone who creates images for work—optimize and boost the engagement and appeal of their design or product, neuroscientists have uncovered a great deal about how the brain's visual systems function.
                    </Typography>
                </Box>
                <StyledGif src={servicesVideo} alt="Neurodesign GIF" />
                <Box sx={{ my: 14 }}>
                    <Typography variant='h4' textAlign="center">
                        How Does Neurodesign Operate?
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        The majority of neurodesign principles centre on the brain's visual systems.
                        How we take in and analyse visual information when making judgements.
                        Understanding the brain's hierarchical information processing system is
                        helpful for designers since it may influence how they approach their work
                        overall. Visual design features must be optimised to maximise visual salience
                        and emotional effect because users and consumers of visual design (such as those
                        in advertising) are frequently inundated with information and have short attention
                        spans. If they are not, they are unlikely to have the desired effect on the user or
                        consumer.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Neurodesign operates at the intersection of neuroscience and design, focusing on creating visually appealing and cognitively effective solutions based on how the human brain perceives and processes information. By understanding the neurological and psychological principles that drive attention, memory, and emotion, neurodesigners craft experiences that resonate with users on a deeper level. This involves analyzing brain activity using advanced techniques like functional magnetic resonance imaging (fMRI), electroencephalography (EEG), and eye-tracking to identify what elements capture attention and evoke emotion.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Neurodesign operates at the intersection of neuroscience and design, focusing on creating visually appealing and cognitively effective solutions based on how the human brain perceives and processes information. By understanding the neurological and psychological principles that drive attention, memory, and emotion, neurodesigners craft experiences that resonate with users on a deeper level. This involves analyzing brain activity using advanced techniques like functional magnetic resonance imaging (fMRI), electroencephalography (EEG), and eye-tracking to identify what elements capture attention and evoke emotion.
                    </Typography>
                    <StyledImage src={Doc} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        The majority of neurodesign principles centre on the brain's visual systems.
                        How we take in and analyse visual information when making judgements.
                        Understanding the brain's hierarchical information processing system is
                        helpful for designers since it may influence how they approach their work
                        overall. Visual design features must be optimised to maximise visual salience
                        and emotional effect because users and consumers of visual design (such as those
                        in advertising) are frequently inundated with information and have short attention
                        spans. If they are not, they are unlikely to have the desired effect on the user or
                        consumer.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Neurodesign operates at the intersection of neuroscience and design, focusing on creating visually appealing and cognitively effective solutions based on how the human brain perceives and processes information. By understanding the neurological and psychological principles that drive attention, memory, and emotion, neurodesigners craft experiences that resonate with users on a deeper level. This involves analyzing brain activity using advanced techniques like functional magnetic resonance imaging (fMRI), electroencephalography (EEG), and eye-tracking to identify what elements capture attention and evoke emotion.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Neurodesign operates at the intersection of neuroscience and design, focusing on creating visually appealing and cognitively effective solutions based on how the human brain perceives and processes information. By understanding the neurological and psychological principles that drive attention, memory, and emotion, neurodesigners craft experiences that resonate with users on a deeper level. This involves analyzing brain activity using advanced techniques like functional magnetic resonance imaging (fMRI), electroencephalography (EEG), and eye-tracking to identify what elements capture attention and evoke emotion.
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
            </Container>
                <Typography variant='h4' textAlign="center" my={2} mx={8}>Don't just take their word for it.</Typography>
            <Typography textAlign="center" mx={44} fontSize={20}>Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging,
                Ad Campaigns, and Brand Recognition</Typography>
            <Box sx={{ textAlign: 'center', my: 2}}>
                <button style={{ backgroundColor: "#07A3FC", borderRadius: "30px", height: "40px", width: "180px", border: "1px solid #07A3FC", color: "white" }}>Our Work</button>
            </Box>
            <FooterPage />

        </>
    )
}
