import React from "react";
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CarIcon from '../../assets/Car.svg';
import Vector from '../../assets/Vector.svg';
import Vector1 from '../../assets/Vector-1.svg';
import Vector2 from '../../assets/Vector-2.svg';

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="static"
      sx={{
        top: 'auto',
        bottom: 0,
        height: isMobile ? 'auto' : '425px',
        backgroundColor: '#fff',
        px: isMobile ? 2 : 0,
        py: isMobile ? 3 : 0,
      }}
    >
      <Toolbar
        width="100%"
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'flex-start' : 'space-between',
          alignItems: isMobile ? 'stretch' : 'flex-start',
          gap: isMobile ? 3 : 0,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            ml: isMobile ? 0 : '55px',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: isMobile ? '100%' : '100%',
              mt: isMobile ? 0 : '85px',
            }}
          >
            <img src={CarIcon} alt="CarRent" style={{ width: 23, height: 33, marginRight: 8 }} />
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
          </Box>
          <Box sx={{ mt: isMobile ? 2 : '22px', display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <img src={Vector} alt="Vector" style={{ width: 36, height: 35, marginRight: 8 }} />
            <img src={Vector1} alt="Vector1" style={{ width: 34, height: 35, marginRight: 8 }} />
            <img src={Vector2} alt="Vector2" style={{ width: 36, height: 28, marginRight: 8 }} />
          </Box>
        </Box>
        <Box sx={{ mt: isMobile ? 3 : 0, textAlign: isMobile ? 'center' : 'left' }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              fontWeight: '800',
              letterSpacing: '1%',
              color: '#222',
              mt: isMobile ? 0 : '92px'
            }}
          >
            Menu
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            Newsroom
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            Careers
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            Partnership
          </Typography>
        </Box>
        <Box sx={{ mt: isMobile ? 3 : 0, textAlign: isMobile ? 'center' : 'left' }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              fontWeight: '800',
              letterSpacing: '1%',
              color: '#222',
              mt: isMobile ? 0 : '92px'
            }}
          >
            Get Help
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            Support Career
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            24h Service
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            Quick Chat
          </Typography>
        </Box>
        <Box sx={{ mt: isMobile ? 3 : 0, textAlign: isMobile ? 'center' : 'left' }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              fontWeight: '800',
              letterSpacing: '1%',
              color: '#222',
              mt: isMobile ? 0 : '92px'
            }}
          >
            Support
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '1%',
              color: '#222',
              mt: '20px'
            }}
          >
            Business
          </Typography>
        </Box>
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.4067559368214!2d30.500593502544195!3d50.3838454625509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8bf73400839%3A0xcdd11bbe7d784783!2z0LLRg9C70LjRhtGPINCT0LXRgNC-0ZfQsiDQntCx0L7RgNC-0L3QuCwgMTUsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1725952375845!5m2!1suk!2sua"
          width={isMobile ? "100%" : "336px"}
          height={isMobile ? "200px" : "272px"}
          style={{
            border: 0,
            borderRadius: "16px",
            marginTop: isMobile ? 24 : '85px',
            maxWidth: isMobile ? '100%' : 'none',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Toolbar>
    </AppBar>
  );
}