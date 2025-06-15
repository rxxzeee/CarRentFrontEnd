import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CarIcon from '../../assets/Car.svg';
import 'typeface-montserrat';

export const Header = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const menuItems = ["Home", "About", "Pricing", "Contact"];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0px', margin: '0px', paddingTop: '32px' }}>
            <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', width: '100%', marginLeft: '0px', padding: '0px 0px' }}>
                <Toolbar sx={{ maxHeight: '40px', padding: '0px 0px', minHeight: { xs: '56px', sm: '64px' } }}>
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
                    {/* Desktop menu */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: '42px',
                            maxWidth: '539px',
                            marginLeft: '350px'
                        }}
                    >
                        {menuItems.map((item, idx) => (
                            <Button
                                key={item}
                                color="inherit"
                                sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    letterSpacing: '1%',
                                    color: '#222',
                                    ...(item === "Contact" && { marginRight: '85px' })
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                    {/* Mobile menu (burger) */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon sx={{ color: '#222' }} />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        >
                            <Box
                                sx={{ width: 220 }}
                                role="presentation"
                                onClick={() => setDrawerOpen(false)}
                                onKeyDown={() => setDrawerOpen(false)}
                            >
                                <List>
                                    {menuItems.map((text) => (
                                        <ListItem button key={text}>
                                            <ListItemText
                                                primary={text}
                                                primaryTypographyProps={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#222'
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}