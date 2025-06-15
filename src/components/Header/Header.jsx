import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import CarIcon from '../../assets/Car.svg';
import 'typeface-montserrat';

export const Header = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0px', margin: '0px', paddingTop:'32px'}}>
            <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', width: '100%', marginLeft:'0px', padding: '0px 0px' }}>
                <Toolbar sx={{maxHeight:'40px', padding:'0px 0px'}}>
                    <img src={CarIcon} alt="CarRent" style={{ width: 23, height: 33, marginRight: 8, marginLeft: '60px' }} />
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: '600',
                            fontSize: '18px',
                            letterSpacing: '2%',
                            color: '#222'
                        }}
                    >
                        AutoCrafted
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '42px', maxWidth: '539px', marginLeft:'350px' }}>
                        <Button
                            color="inherit"
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: '600',
                                fontSize: '16px',
                                letterSpacing: '1%',
                                color: '#222'
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: '600',
                                fontSize: '16px',
                                letterSpacing: '1%',
                                color: '#222'
                            }}
                        >
                            About
                        </Button>
                        <Button
                            color="inherit"
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: '600',
                                fontSize: '16px',
                                letterSpacing: '1%',
                                color: '#222'
                            }}
                        >
                            Pricing
                        </Button>
                        <Button
                            color="inherit"
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: '600',
                                fontSize: '16px',
                                letterSpacing: '1%',
                                color: '#222',
                                marginRight:'85px'
                            }}
                        >
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}