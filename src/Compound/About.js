import React from 'react';
import { Container, Box, Typography, Grid, Avatar } from '@mui/material';
import AboutImg from '../assest/About.png';
import Barchart from '../assest/barchart.png';
import Innovation from '../assest/Innovation.png';
import Expertise from '../assest/Expertise.png';
import Comprehensive from '../assest/Comper.png';
import Ethical from '../assest/Ethical.png';
import { styled } from '@mui/material/styles';
import Person from '../assest/Person.png';
import LinkedInIcon from '../assest/linkedin.png';
import FooterPage from './FooterPage';
import NavbarTwo from './NavbarTwo';

const boxData = [
    {
        title: '200+',
        content: 'Neuropricing',
    },
    {
        title: '200+',
        content: 'Neuropricing',
    },
    {
        title: '200+',
        content: 'Neuropricing',
    },
];

const cardData = [
    {
        icon: Innovation,
        title: 'Innovative Technology and Methodologies',
    },
    {
        icon: Expertise,
        title: 'Expertise and Experience',
    },
    {
        icon: Comprehensive,
        title: 'Comprehensive Service Offerings',
    },
    {
        icon: Ethical,
        title: 'Ethical and Rigorous Research Standards',
    },
];

const StyledBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    justifyContent: 'center',
    marginTop: '20px',
});

const Card = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const IconImage = styled('img')({
    width: '60px',
    height: '60px',
});

const StyledImage = styled('img')({
    width: '100%',
    borderRadius: '8px',
    marginTop: '80px'
});

const TextOverlay = styled('div')({
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '16px',
    marginTop: '-40px'
});

const teamMembers = [
    { name: 'Mr. Anoop Antony', title: 'Founder and CEO', image: Person },
    { name: 'Dr. Manu Krishna M.G', title: 'Advisor', image: Person },
    { name: 'Dr. Utkarsh Gupta', title: 'Advisor', image: Person },
    { name: 'Dr. Onyeka Obilo', title: 'Voluntary Advisor', image: Person },
    { name: 'Ms. Mahika ', title: 'Neuromarketing Specialist', image: Person },
    { name: 'Mr. Chun Pang', title: 'Quantitative Researcher', image: Person },
    { name: 'Mr. Jaya ', title: 'Neuromarketing Specialist', image: Person },
    { name: 'Ms. Greta Lanni', title: 'Neuromarketing Specialist', image: Person },
];

const LinkedInAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(3),
    height: theme.spacing(3),
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
}));

const TeamMemberBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    textAlign: 'center',
    // padding: theme.spacing(2),
    border: '1px solid #ddd',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
}));

const TeamImage = styled('img')({
    width: '100%',
    borderRadius: '50%',
    marginBottom: '16px',
});

const About = () => {
    return (
        <>
        <NavbarTwo/>
            <Container maxWidth="md" sx={{my:18}}>
                <Box sx={{ textAlign: 'center', my: 4, mx: 8 }}>
                    <Typography variant="h2">
                        About our company <span style={{ color: '#07A3FC' }}> NeuroX </span>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        backgroundColor: 'black',
                        color: 'white',
                        width: '100%'
                    }} my={4}
                >
                    {boxData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '30%',
                                p: 2,
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="h4">{item.title}</Typography>
                            <Typography variant="body1">{item.content}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box position="relative">
                    <StyledImage src={AboutImg} alt="Services" />
                    <TextOverlay>
                        <Typography variant="h6" component="h2" sx={{ backgroundColor: "white", color: "#07A3FC", borderRadius: "8px", height: "50px", width: "200px" }} p={1}>
                            About Our Company
                        </Typography>
                    </TextOverlay>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }} my={4}>
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
                    >
                        NeuroX is a pioneering neuromarketing and consumer neuroscience company at the forefront of decoding consumer behavior using advanced neuroscience techniques. With a team of experts spanning neuroscience, psychology, marketing, and technology, NeuroX offers cutting-edge solutions tailored to uncovering subconscious reactions and preferences. By leveraging state-of-the-art technologies such as EEG, eye-tracking, and AI-powered analytics, NeuroX empowers businesses to make data-driven marketing decisions that drive growth and enhance brand engagement. Join us as we revolutionize the way brands understand and connect with their audience through the power of neuroscience.
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4">
                        Why Choose NeuroX?
                    </Typography>
                </Box>
                <StyledBox>
                    {cardData.map((item, index) => (
                        <Card key={index}>
                            <IconImage src={item.icon} alt={item.title} />
                            <Typography variant="h6" mt={2}>{item.title}</Typography>
                        </Card>
                    ))}
                </StyledBox>
                <Box sx={{ textAlign: "center" }} my={10}>
                    <Typography variant="h4">
                        Meet out excellence team members
                    </Typography>
                    <Typography variant="h6" my={4}>
                        With EventraScreen, elevate every occasion with innovative and dynamic screen interfaces crafted to captivate your audience.
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <TeamMemberBox>
                                <LinkedInAvatar alt="LinkedIn" src={LinkedInIcon} />
                                <TeamImage src={member.image} alt={member.name} />
                                <Typography variant="p" sx={{display:"flex",justifyContent:"left",alignItems:"flex-start"}}>{member.name}</Typography>
                                <Typography variant="body1"  color="#07A3FC" sx={{display:"flex",justifyContent:"left",fontSize:"0.7rem"}}>{member.title}</Typography>
                            </TeamMemberBox>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: "center" }} my={10}>
                    <Typography variant="h4">
                        Brand Growth
                    </Typography>
                    <Typography variant="h6" my={4}>
                        With EventraScreen, elevate every occasion with innovative and dynamic screen interfaces crafted to captivate your audience.
                    </Typography>
                </Box>
                <StyledImage src={Barchart} alt="Services" />
                <Box sx={{ textAlign: "center" }} my={10}>
                    <Typography variant="h4">
                        Partnerships / Collaborations
                    </Typography>
                    <Typography variant="h6" my={4} fontFamily={"Arimo"}>
                        With EventraScreen, elevate every occasion with innovative and dynamic screen interfaces crafted to captivate your audience.
                    </Typography>
                </Box>
            </Container>
            <FooterPage />
        </>
    );
};

export default About;
