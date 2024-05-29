import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Avatar, Modal, Backdrop, Fade } from '@mui/material';
import AboutImg from '../assest/About.png';
import Barchart from '../assest/barchart.png';
import Innovation from '../assest/Innovation.png';
import Expertise from '../assest/Expertise.png';
import Comprehensive from '../assest/Comper.png';
import Ethical from '../assest/Ethical.png';
import { styled } from '@mui/material/styles';
import Person from '../assest/Person.png';
import Anoop from '../assest/Anoop.png';
import LinkedInIcon from '../assest/linkedin.png';
import FooterPage from './FooterPage';
import NavbarTwo from './NavbarTwo';
// import './styles.css'; // Ensure this is imported for the blur effect

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
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleOpen = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedMember(null);
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
    };
    
    const getDescriptionForMember = (member) => {
        if (member.name === 'Mr. Anoop Antony') {
            return `Driven by a passion for understanding the intricate workings of the human mind and behavior, our CEO and Founder brings a wealth of knowledge and expertise to NeuroX. With a solid educational background including a BSc in Psychology, MSc in Cognitive Neuroscience, and additional diplomas in neuromarketing and consumer neuroscience, he has dedicated years to unraveling the mysteries of the brain.
            
            He has honed his skills through diverse professional experiences, ranging from psychological therapies to neurodevelopmental and auditory practices. As a seasoned neurofeedback specialist and neuroscience researcher, they have delved deep into the realms of brain function and behavior, exploring innovative solutions for various neurological challenges.
            
            Fuelled by a vision to leverage neuroscience advancements for real-world applications, Mr. Antony founded NeuroX. At the helm of our consumer science lab, he leads a dynamic team of experts in harnessing the power of neuromarketing, artificial intelligence (AI), and brain-computer interface (BCI) technologies. Their enthusiasm for utilizing eye tracking and EEG research to enhance early detection and optimize solutions for social and neurodevelopmental disorders is at the heart of NeuroX's mission.
            
            With a relentless drive for innovation and a commitment to pushing the boundaries of neuroscience, Mr. Antony is dedicated to steering NeuroX towards pioneering advancements that shape the future of marketing, healthcare, and beyond.`;
        }
        
        return "Description for other members.";
    };
    


    return (
        <>
            <NavbarTwo />
            <Container maxWidth="md" sx={{ my: 18 }}>
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
                        Meet our excellent team members
                    </Typography>
                    <Typography variant="h6" my={4}>
                        With EventraScreen, elevate every occasion with innovative and dynamic screen interfaces crafted to captivate your audience.
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} >
                            <TeamMemberBox onClick={() => handleOpen(member)} sx={{padding:"6px"}}>
                                <LinkedInAvatar alt="LinkedIn" src={LinkedInIcon} />
                                <TeamImage src={member.image} alt={member.name} />
                                <Typography variant="body1" sx={{ display: "flex", justifyContent: "left", alignItems: "flex-start" }}>{member.name}</Typography>
                                <Typography variant="body2" color="#07A3FC" sx={{ display: "flex", justifyContent: "left", fontSize: "0.7rem" }}>{member.title}</Typography>
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
                    <img src={Barchart} style={{ height: "400px", width: "100%" }} alt="Barchart" />
                </Box>
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

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                sx={{height:"100%",width:"100%"}}
            >
                <Fade in={open}>
                    <Grid sx={modalStyle}>
                        {selectedMember && (
                            <Grid sx={{ display: 'flex' }}>
                                <Avatar
                                    alt={selectedMember.name}
                                    src={selectedMember.image}
                                    sx={{ width: 120, height: 120, marginRight: 4 }}
                                />
                                <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        {selectedMember.name}
                                    </Typography>
                                    <Typography variant="body2" color="#07A3FC" sx={{ fontSize: "0.8rem" }}>
                                        {selectedMember.title}
                                    </Typography>
                                    <Typography id="transition-modal-description" sx={{ mt: 2 ,fontSize:"12px"}}>
                                        {getDescriptionForMember(selectedMember)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Fade>
            </Modal>
        </>
    );
};


export default About;
