import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import logo from '../../assest/Neuro x final png 4.png';
import { Container, Grid, Link, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import LabImage from '../../assest/Lab.png';
import Map from '../../assest/map.png';
import ServiceCard from '../ServiceCard';
import neurodesignImage from '../../assest/Neuro design.png';
import neurobrandImage from '../../assest/Neuro design.png';
import neuropackagingImage from '../../assest/Neuro design.png';
import userExperienceImage from '../../assest/Neuro design.png';
import productTestingImage from '../../assest/Neuro design.png';
import amazonImage from '../../assest/Amazon.png';
import brandImage from '../../assest/Brands.png';
import pradaImage from '../../assest/Prada.png';
import bookImage from '../../assest/Book.png';
import oriflameImage from '../../assest/Oriflame.png';
import wardahImage from '../../assest/Wardah.png';
import primevideoImage from '../../assest/Primevideo.png';
import DocGif from '../../assest/DocSpeak.gif';
import { makeStyles } from '@mui/styles';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { color } from 'framer-motion';
import NavbarTwo from '../NavbarTwo';
import { useNavigate } from 'react-router-dom';
import FooterPage from '../FooterPage';
const ToolbarContainer = styled(Toolbar)({
    justifyContent: 'space-between',
});

const NavLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
}));

const StyledImage = styled('img')({
    width: '100%',
    borderRadius: '8px',
});

const StyledGif = styled('img')({
    width: '100%',
    borderRadius: '8px',
    height: 'auto',
});

// const StyledMap = styled('img')({
//     width: '100%',
//     marginTop: '100px',
// });

const StyledButton = styled(Button)({
    borderRadius: '30px',
    textTransform: 'none',
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#F0FAFF',
    color: 'black',
    '&:hover': {
        backgroundColor: '#07A3FC',
        color: 'white'
    },
});


const services = [
    {
        title: 'EEG',
        description: "EEG records brain's electrical activity via scalp electrodes, aiding in diagnosis and research of neurological conditions. It offers insights into brain.",
        imageUrl: neurodesignImage,
    },
    {
        title: 'EMG',
        description: "Facial coding involves analyzing facial expressions to understand emotions and psychological states, often used in market research, user experience testing.",
        imageUrl: neurobrandImage,
    },
    {
        title: 'NCV',
        description: "Eye tracking measures gaze behavior, revealing insights into visual attention and cognitive processes across various fields.",
        imageUrl: neuropackagingImage,
    }
];

const images = [amazonImage, brandImage, pradaImage, primevideoImage, bookImage, oriflameImage, wardahImage]; // Add more images as needed

const useStyles = makeStyles((theme) => ({
    Partners_page_brands: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'relative',
        width: '100vw',
    },
    Partners_page_brands_container: {
        animation: '$scroll 20s linear infinite',
        display: 'flex',
        width: 'fit-content',
    },
    Partners_page_img: {
        height: '15vh',
        marginRight: '50px',
        width: '15vw',
    },
    '@keyframes scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
    },
}));

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: '#000',
    color: '#fff',
    padding: theme.spacing(4, 0),
}));

const SocialIconsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
});
export default function Technology() {
    const classes = useStyles();


    const navigate = useNavigate();

    return (
        <>
            <NavbarTwo />
            <Container>
                <Box sx={{ textAlign: 'center', my: 20 }}>
                    <Typography variant="h2" gutterBottom>
                        LAB
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "20px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also
                    </Typography>
                </Box>
                <StyledImage src={LabImage} alt="Services" />
            </Container>
            <Container>
                <Box sx={{ my: 20 }}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                        />
                    ))}
                </Box>
            </Container>
            <Box sx={{ textAlign: 'center', my: 20, mx: 20 }}>
                <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "28px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen <span style={{ color: "#09a4fc" }}> book. It has survived not only five centuries, but also</span>
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "18px", marginTop: "100px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                </Typography>
                {/* <StyledMap src={Map} alt="Services" /> */}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', my: 4 }}>
                <StyledButton variant="contained">MEMORY</StyledButton>
                <StyledButton variant="contained">RELEVANCE</StyledButton>
                <StyledButton variant="contained">NERVOUS SYSTEM</StyledButton>
                <StyledButton variant="contained">NEUROIMAGING</StyledButton>
            </Box>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={2} sx={{ height: '100%' }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Card sx={{ flexGrow: 1 }}>
                            <CardMedia sx={{ flexGrow: 1 }}>
                                <StyledGif src={DocGif} alt="Neurodesign GIF" />
                            </CardMedia>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography component="div" fontSize={16} my={2} sx={{ color: "#5F5F5F" }}>
                                    <span style={{ color: '#07A3FC' }}> NeuroX </span> specializes in revolutionizing businesses' marketing strategies by delving into the intricate workings of the human mind. Through a fusion of traditional organoleptic testing techniques and cutting-edge biometric instruments such as biometric response interviews (BRI), electroencephalograms (EEGs), and face coding, we uncover invaluable insights into consumer behavior and perception. By understanding the subconscious triggers that influence decision-making, we empower businesses to tailor their marketing efforts with precision, enhancing brand recognition and driving revenue growth. Our approach taps into the essence of consumer psychology, enabling businesses to create resonant brand experiences that forge lasting connections with their target audience.
                                </Typography>
                                <Typography fontSize={14} color="text.secondary" my={2}>
                                    Organoleptic testing techniques and cutting-edge biometric instruments such as biometric response interviews (BRI), electroencephalograms (EEGs), and face coding, we uncover invaluable insights into consumer behavior and perception. By
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant='h4' textAlign="center" m={8}>Don't just take their word for it.</Typography>
            <Typography textAlign="center" mx={44} fontSize={20}>Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging,
                Ad Campaigns, and Brand Recognition</Typography>
            <Box sx={{ textAlign: 'center', my: 8 }}>
                <button style={{ backgroundColor: "#07A3FC", borderRadius: "30px", height: "40px", width: "180px", border: "1px solid #07A3FC", color: "white" }}>Our Work</button>
            </Box>
            <div className={classes.Partners_page_brands}>
                <div className={classes.Partners_page_brands_container}>
                    {images.map((image, index) => (
                        <img key={index} src={image} className={classes.Partners_page_img} alt={`Image ${index}`} />
                    ))}
                </div>
            </div>
            <Box sx={{ textAlign: 'center', my: 20, mx: 20 }}>
                <Typography variant="h3">
                    Ready to work with us?
                </Typography>
                <Typography variant="h6" sx={{ color: "gray", fontSize: "20px", marginTop: "100px" }}>
                    Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging, Ad Campaigns, and Brand Recognition
                </Typography>
            </Box>
            <FooterContainer>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box mb={2}>
                                <img src={logo} alt="NeuroX Logo" style={{ height: '50px' }} />
                            </Box>
                            <Typography variant="body1" sx={{ color: "#CFCFCF" }}>
                                NeuroX is revolutionizing the way businesses understand consumer behavior by merging cutting-edge neuroscience with marketing strategies. Our team of experts utilizes state-of-the-art technologies such as EEG, Facial Coding, and Eye Tracking to uncover deep insights into consumer preferences, emotions, and decision-making processes. With our own state-of-the-art lab based in London and a team of passionate professionals.
                            </Typography>
                            <SocialIconsContainer sx={{ marginRight: "210px" }}>
                                <IconButton href="#" color="inherit">
                                    <Facebook />
                                </IconButton>
                                <IconButton href="#" color="inherit">
                                    <Twitter />
                                </IconButton>
                                <IconButton href="#" color="inherit">
                                    <LinkedIn />
                                </IconButton>
                                <IconButton href="#" color="inherit">
                                    <Instagram />
                                </IconButton>
                            </SocialIconsContainer>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="h6">Navigation</Typography>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li><Link href="#" color="inherit" underline="none">Service</Link></li>
                                <li><Link href="#" color="inherit" underline="none">Technology</Link></li>
                                <li><Link href="#" color="inherit" underline="none">Case Study</Link></li>
                                <li><Link href="#" color="inherit" underline="none">Resource</Link></li>
                                <li><Link href="#" color="inherit" underline="none">Contact</Link></li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="h6">Licence</Typography>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li><Link href="#" color="inherit" underline="none">Privacy Policy</Link></li>
                                <li><Link href="#" color="inherit" underline="none">Copyright</Link></li>
                                <li><Link href="#" color="inherit" underline="none">Email Address</Link></li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Contact</Typography>
                            <Box sx={{ marginTop: "10px" }}>
                                <Typography variant="body2"><PhoneIcon /> +44 7564 522241</Typography>
                                <Typography variant="body2"><EmailIcon /> contact@neurox.co.uk</Typography>
                                <Typography variant="body2"><LocationOnIcon /> 20 Wenlock Road, London, N1 7GU</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </FooterContainer>
            <FooterPage />
        </>
    )
}
