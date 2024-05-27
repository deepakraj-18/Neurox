// import React, { useState } from 'react';
// import { Container, Box, Typography, ButtonGroup, Button, Grid,} from '@mui/material';
// import { styled } from '@mui/material/styles';
// import Teach from '../../assest/teach.png';
// import Person from '../../assest/Person.png';
// import NavbarTwo from '../NavbarTwo';
// import FooterPage from '../FooterPage';
// import { useNavigate } from 'react-router-dom';


// const ToggleButton = styled(Button)(({ theme, selected }) => ({
//   borderRadius: '50px',
//   height: '50px',
//   width: '100px',
//   backgroundColor: selected ? '#00AFFF' : '#F5F5F5',
//   color: selected ? '#fff' : '#000',
//   '&:hover': {
//     backgroundColor: selected ? '#00AFFF' : '#E0E0E0',
//     border: 'transparent'
//   },
//   padding: '10px 20px',
//   textTransform: 'none',
//   fontWeight: 'bold',
//   border: 'transparent'
// }));

// const StyledImage = styled('img')({
//   width: '100%',
//   borderRadius: '8px',
//   marginTop: '80px'
// });

// const teamMembers = [
//   { name: 'Name', title: 'Destination', image: Person },
//   { name: 'Name', title: 'Destination', image: Person },
//   { name: 'Name', title: 'Destination', image: Person },
//   { name: 'Name', title: 'Destination', image: Person },
//   { name: 'Name ', title: 'Destination', image: Person },
//   { name: 'Name', title: 'Destination', image: Person },
//   { name: 'Name', title: 'Destination', image: Person },
//   { name: 'Name', title: 'Destination', image: Person },
// ];

// const TeamMemberBox = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   textAlign: 'center',
//   padding: theme.spacing(2),
//   backgroundColor: '#fff',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   '&:hover': {
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   },
// }));

// const TeamImage = styled('img')({
//   width: '100%',
//   borderRadius: '50%',
//   marginBottom: '16px',
// });


// const CardBox = styled(Box)(({ theme }) => ({
//     textAlign: 'center',
//     padding: theme.spacing(2),
//     boxShadow: 'none',
//   }));
  
//   const CardHeading = styled(Typography)(({ theme }) => ({
//     fontWeight: 'bold',
//     marginBottom: theme.spacing(1),
//   }));
  
//   const CardContent = styled(Typography)(({ theme }) => ({
//     color: theme.palette.text.secondary,
//   }));
  
//   const cards = [
//     {
//       heading: 'Contact',
//       content: 'Neuromarketers use frontal hemisphere asymmetry as a proxy for approach-avoidance behaviour  towards brands and products. It has been discovered that frontal asymmetries represent quick,  subconscious ',
//     },
//     {
//       heading: 'Subject',
//       content: 'Neuromarketers use frontal hemisphere asymmetry as a proxy for approach-avoidance behaviour  towards brands and products. It has been discovered that frontal asymmetries represent quick,  subconscious ',
//     },
//     {
//       heading: 'Others',
//       content: 'Neuromarketers use frontal hemisphere asymmetry as a proxy for approach-avoidance behaviour  towards brands and products. It has been discovered that frontal asymmetries represent quick,  subconscious ',
//     },
//   ];


// const Event = () => {
//   const navigate = useNavigate();
//   const [selected, setSelected] = useState('Events');

//   return (
//     <>
//        <NavbarTwo />
//     <Container maxWidth="md" sx={{my:18}}>
//       <Box sx={{ textAlign: 'center', my: 4 }}>
//         <Typography variant="h2">Events/ Resources</Typography>
//         <Typography variant="h5" my={2} mx={2}>
//           Neuro-Info Development refers to the intersection of neuroscience and information technology, a rapidly evolving field that explores how advancements in neuroscience can inform and enhance developments in information technology, and vice versa.
//         </Typography>
//       </Box>
//       <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
//         <ToggleButton
//           selected={selected === 'Events'}
//           onClick={() => setSelected('Events')}
//         >
//           Events
//         </ToggleButton>
//         <ToggleButton
//           selected={selected === 'Resources'}
//           onClick={() => setSelected('Resources')}
//         >
//           Resources
//         </ToggleButton>
//       </ButtonGroup>
//       <Box sx={{ textAlign: 'center', my: 8 }}>
//         <Typography variant="h4" my={2}>Brainwave Frequency Analysis</Typography>
//         <Typography variant="h6" my={4} mx={2}>
//           Neuromarketers use frontal hemisphere asymmetry as a proxy for approach-avoidance behaviour towards brands and products. It has been discovered that frontal asymmetries represent quick, subconscious
//         </Typography>
//       </Box>
//       <StyledImage src={Teach} alt="Services" />
//       <Typography
//         variant="body1"
//         paragraph
//         sx={{ color: 'gray', fontSize: '22px', textAlign: "left", my: 6 }}
//       >
//         NeuroX specializes in revolutionizing businesses' marketing strategies by delving into the intricate workings of the human mind. Through a fusion of traditional organoleptic testing techniques and cutting-edge biometric instruments such as biometric response interviews (BRI), electroencephalograms (EEGs), and face coding, we uncover invaluable insights into consumer behavior and perception. By understanding the subconscious triggers that influence decision-making, we empower businesses to tailor their marketing efforts with precision, enhancing brand recognition and driving revenue growth. Our approach taps into the essence of consumer psychology, enabling businesses to create resonant brand experiences that forge lasting connections with their target audience.
//       </Typography>
//       <Box sx={{ textAlign: 'center', my: 8 }}>
//         <Typography variant="h4" my={2}>Event Hosting</Typography>
//         <Typography variant="h6" my={4} mx={2}>
//           Neuromarketers use frontal hemisphere asymmetry as a proxy for approach-avoidance behaviour towards brands and products. It has been discovered that frontal asymmetries represent quick, subconscious
//         </Typography>
//       </Box>
//       <Grid container spacing={4}>
//         {teamMembers.map((member, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <TeamMemberBox>
//               <TeamImage src={member.image} alt={member.name} />
//               <Typography variant="h6">{member.name}</Typography>
//               <Typography variant="body1" color="primary">{member.title}</Typography>
//             </TeamMemberBox>
//           </Grid>
//         ))}
//       </Grid>
//       <Box sx={{ textAlign: 'center', my: 8 }}>
//         <Typography variant="h4" my={2}>Control</Typography>
//         <Typography variant="h6" my={4} mx={2}>
//         Neuromarketers use frontal hemisphere asymmetry as a proxy for approach-avoidance behaviour  towards brands and products. It has been discovered that frontal asymmetries represent quick,  subconscious 
//         </Typography>
//       </Box>

//       <Grid container spacing={4}>
//         {cards.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <CardBox>
//               <CardHeading variant="h6">{card.heading}</CardHeading>
//               <CardContent variant="body1" sx={{ textAlign: 'left'}}>{card.content}</CardContent>
//             </CardBox>
//           </Grid>
//         ))}
//       </Grid>
//       <Typography variant='h4' textAlign="center" m={8}>Don't just take their word for it.</Typography>
//             <Typography textAlign="center" fontSize={20}>Unleash the Potential of Your Brand: Let NeuroX Elevate Your Packaging,
//                 Ad Campaigns, and Brand Recognition</Typography>
//             <Box sx={{ textAlign: 'center', my: 8 }}>
//                 <button style={{ backgroundColor: "#07A3FC", borderRadius: "30px", height: "40px", width: "180px", border: "1px solid #07A3FC", color: "white" }}>Our Work</button>
//             </Box>
      
//     </Container>
//     <FooterPage />
//     </>
//   );
// };

// export default Event;
import React from 'react';
import video from '../../data/comingsoon.mp4';
import { Typography } from '@mui/material';
import NavbarTwo from '../NavbarTwo';

export default function Event() {
    return (
        <>
        <NavbarTwo />
        <div className="home-container">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="neuox-container" style={{textAlign:'center'}}>
            <Typography variant='h1'>Event</Typography>
                <span className="neuox-text">Coming <span style={{color:"#09a4fc"}}>Soon </span></span>
            </div>
        </div>
        </>
    );
}
