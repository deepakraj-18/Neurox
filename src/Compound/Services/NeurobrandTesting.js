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


export default function NeurobrandTesting() {
    const navigate = useNavigate();
    return (
        <><NavbarTwo />
            <Container>
                <Box sx={{ textAlign: 'center', my: 14 }}>
                    <Typography variant="h2" gutterBottom>
                        Neurobrand testing
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "22px" }}>
                        To boost your business with neurobrand testing, define objectives, select appropriate tools, and design stimuli. Recruit a diverse sample, conduct testing, and analyze data for insights. Refine branding strategies, integrate with traditional research, and ensure ethical practices throughout the process.
                    </Typography>
                </Box>
                <StyledGif src={servicesVideo} alt="Neurodesign GIF" />
                <Box sx={{ my: 14 }}>
                    <Typography variant='h4' textAlign="center">
                        Why Neurobrand testing:
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Leveraging neurobrand testing effectively for your business involves several key steps. Firstly, it's crucial to define clear objectives for the testing process, whether you aim to optimize current branding elements, understand consumer perceptions, or evaluate new campaigns. Next, select the appropriate neuroscientific tools and methodologies that align with your goals and budget. Once you've chosen your tools, design stimuli such as logos, packaging designs, or advertisements to test. Then, recruit a diverse sample of participants that reflects your target audience. Conduct the testing in controlled conditions while measuring subconscious responses. Analyze the data collected, focusing on emotional response, attention levels, and memory activation. Use these insights to refine branding elements and marketing strategies. It's essential to integrate neurobrand testing with traditional research methods for a comprehensive understanding of consumer behavior. Finally, ensure ethical practices throughout the testing process, including obtaining informed consent and protecting participant privacy. By following these steps, you can harness neurobrand testing to enhance your branding strategies and better connect with your audience on a subconscious level.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Neurobrand testing offers a revolutionary approach to understanding consumer behavior by delving into the subconscious mind. Unlike traditional market research methods, neurobrand testing taps into neurological responses to uncover deep-seated emotions, preferences, and perceptions that influence purchasing decisions. By employing sophisticated techniques such as EEG, fMRI, and eye-tracking, businesses gain unparalleled insights into how their branding elements resonate with consumers on a subconscious level. This nuanced understanding allows for the optimization of branding strategies, ensuring that every aspect—from logos to advertisements—resonates profoundly with the target audience. Ultimately, neurobrand testing empowers businesses to create more engaging, memorable, and impactful brand experiences that drive customer loyalty and business success.
                    </Typography>
                    <Typography variant='h4' textAlign="center">
                        Estimating the impact and potency of your idea.
                    </Typography>
                    <StyledImage src={Doc} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Assessing the potential impact and potency of your idea involves a comprehensive analysis of various factors to gauge its viability and effectiveness. This evaluation encompasses market research to understand demand and competition, an examination of the uniqueness and scalability of the idea, and a consideration of potential obstacles and challenges that may arise. Seeking feedback from stakeholders and experts can provide valuable insights for refinement and validation. By meticulously analyzing these elements, you can gain a clearer understanding of the potential impact and potency of your idea, helping to inform strategic decisions and maximize its success.
                    </Typography>
                    <StyledImage src={Doc} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Assessing the potential impact and potency of your idea involves a comprehensive analysis of various factors to gauge its viability and effectiveness. This evaluation encompasses market research to understand demand and competition, an examination of the uniqueness and scalability of the idea, and a consideration of potential obstacles and challenges that may arise. Seeking feedback from stakeholders and experts can provide valuable insights for refinement and validation. By meticulously analyzing these elements, you can gain a clearer understanding of the potential impact and potency of your idea, helping to inform strategic decisions and maximize its success.
                    </Typography>
                    <StyledImage src={Doc} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Assessing the potential impact and potency of your idea involves a comprehensive analysis of various factors to gauge its viability and effectiveness. This evaluation encompasses market research to understand demand and competition, an examination of the uniqueness and scalability of the idea, and a consideration of potential obstacles and challenges that may arise. Seeking feedback from stakeholders and experts can provide valuable insights for refinement and validation. By meticulously analyzing these elements, you can gain a clearer understanding of the potential impact and potency of your idea, helping to inform strategic decisions and maximize its success.
                    </Typography>
                    <StyledImage src={Doc} alt="Services" />
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        Assessing the potential impact and potency of your idea involves a comprehensive analysis of various factors to gauge its viability and effectiveness. This evaluation encompasses market research to understand demand and competition, an examination of the uniqueness and scalability of the idea, and a consideration of potential obstacles and challenges that may arise. Seeking feedback from stakeholders and experts can provide valuable insights for refinement and validation. By meticulously analyzing these elements, you can gain a clearer understanding of the potential impact and potency of your idea, helping to inform strategic decisions and maximize its success.
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
                <Typography variant='h4' textAlign="center" m={8}>Don't just take their word for it.</Typography>
                <Typography textAlign="center" mx={20} fontSize={20}>Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging,
                    Ad Campaigns, and Brand Recognition</Typography>
                <Box sx={{ textAlign: 'center', my: 8 }}>
                    <button style={{ backgroundColor: "#07A3FC", borderRadius: "30px", height: "40px", width: "180px", border: "1px solid #07A3FC", color: "white" }}>Our Work</button>
                </Box>
            </Container>
            <FooterPage />

        </>
    )
}
