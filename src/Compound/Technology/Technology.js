import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import logo from '../../assest/Neuro x final png 4.png';
import { Container, Grid, Link, Typography, Box } from '@mui/material';
import servicesVideo from '../../data/AN ANALYSIS OF NEURONS.mp4';
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
import { makeStyles } from '@mui/styles';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ToolbarContainer = styled(Toolbar)({
    justifyContent: 'space-between',
});

const NavLinks = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
}));

const StyledVideo = styled('video')({
    width: '100%',
    borderRadius: '8px',
});

const StyledMap = styled('img')({
    width: '100%',
    marginTop: '100px',
});

const services = [
    {
        title: 'EEG',
        description: "EEG records brain's electrical activity via scalp electrodes, aiding in diagnosis and research of neurological conditions. It offers insights into brain.",
        imageUrl: neurodesignImage,
    },
    {
        title: 'Facial Coding',
        description: "Facial coding involves analyzing facial expressions to understand emotions and psychological states, often used in market research, user experience testing.",
        imageUrl: neurobrandImage,
    },
    {
        title: 'Eye Tracking',
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


    return (
        <>
            <Container>
                <Box sx={{ textAlign: 'center', my: 20 }}>
                    <Typography variant="h2" gutterBottom>
                        Technology
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "20px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also
                    </Typography>
                </Box>
                <StyledVideo autoPlay loop muted>
                    <source src={servicesVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </StyledVideo>
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
                    specimen <span style={{ color: "blue" }}> book. It has survived not only five centuries, but also</span>
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: "gray", fontSize: "18px", marginTop: "100px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                </Typography>
                <StyledMap src={Map} alt="Services" />
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

        </>
    )
}
