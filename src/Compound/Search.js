import React from 'react'
import NavbarTwo from './NavbarTwo';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

export default function Search() {
    return (
        <>
            <NavbarTwo />
            <Box sx={{ height: "50px", width: "600px", borderBottom: '1px solid black', mx: "auto", marginTop: '40px', display: 'flex', alignItems: 'center' }}>
                <SearchIcon sx={{ color: "black" }} />
                <Typography fontFamily={"Arimo"} fontSize={30} color="#737373">What are you looking for?</Typography>
            </Box>
            <Box sx={{ width: "600px",  mx: "auto", marginTop: '40px', display: 'flex', alignItems: 'center',justifyContent:"center " }}>
                <Typography fontFamily={"Arimo"} fontSize={40} color="#090909">Some suggestions</Typography>
            </Box>
        </>
    )
}
