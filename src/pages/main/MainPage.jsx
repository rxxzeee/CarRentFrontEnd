import React from 'react';
import { Box, Button, Typography, Divider, Grid, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dodgeviper1 from '../../assets/dodgeviper1.svg';
import group2 from '../../assets/Group 2.svg';
import group3 from '../../assets/Group 3.svg';
import group4 from '../../assets/Group 4.svg';
import starsrating from '../../assets/3 Stars Rating.svg';
import astonmartin from '../../assets/astonmartin.svg';
import frame10 from '../../assets/Frame 10.svg';
import frame11 from '../../assets/Frame 11.svg';
import frame12 from '../../assets/Frame 12.svg';
import frame13 from '../../assets/Frame 13.svg';

export const MainPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cards = [
    {
      image: group3,
      title: "Safety First",
      subtitle: "Experienced stall and professionally trained chauffeurs.",
      divider: false
    },
    {
      image: starsrating,
      title: "Reasonable rates",
      subtitle: "We can offer you the right vehicle at the right price to fit your budget.",
      divider: true
    },
    {
      image: group2,
      title: "Largest Fleet",
      subtitle: "We offer an extensive fleet of vehicles including sedons dons.",
      divider: true
    },
    {
      image: group4,
      title: "Nationwide service",
      subtitle: "We provide our transportation services nationwide.",
      divider: false
    }
  ];

  const cars = [
    {
      title: 'Lamborghini Urus',
      image: frame10,
    },
    {
      title: 'McLaren P1 hybrid',
      image: frame11,
    },
    {
      title: 'Porsche 911 Turbo S',
      image: frame12,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        minHeight: '100vh',
        px: isMobile ? 1 : 4,
        pb: 8,
        paddingLeft: isMobile ? 0 : '80px',
      }}
    >
      <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
        {/* Лівий блок — заголовок */}
        <Box>
          <Typography
            fontWeight="bold"
            gutterBottom={false}
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: isMobile ? '32px' : '64px',
              lineHeight: 1,
              pt: isMobile ? '40px' : '130px',
              mb: 0,
              letterSpacing: '3%',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            THE EASIEST WAY
          </Typography>
          <Typography
            fontWeight="bold"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: isMobile ? '32px' : '64px',
              lineHeight: 1,
              mt: isMobile ? '10px' : '20px',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            TO BUY A CAR
          </Typography>
        </Box>

        {/* Правий блок — текст і кнопка */}
        <Box textAlign={isMobile ? "center" : "left"} sx={{ pl: isMobile ? 0 : '222px' }}>
          <Typography
            sx={{
              mb: 2,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: isMobile ? '16px' : '24px',
              lineHeight: isMobile ? '24px' : '35px',
              letterSpacing: '1%',
              pt: isMobile ? '20px' : '107px',
            }}
          >
            Explore the Latest Innovations and <br />
            Hottest Wheels on Our Enthusiast <br />
            Website
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#202020',
              fontFamily: 'Roboto, sans-serif',
              fontSize: isMobile ? '14px' : '18px',
              color: '#fff',
              textTransform: 'none',
              fontWeight: '600',
              height: isMobile ? '48px' : '63px',
              width: isMobile ? '120px' : '167px',
              mt: '20px',
              px: 4,
              '&:hover': {
                backgroundColor: '#000',
              },
            }}
          >
            Get started
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={isMobile ? 2 : '32px'} sx={{ p: 0 }}>
        <img
          src={dodgeviper1}
          alt="CarRent"
          style={{
            width: isMobile ? '100%' : 1330,
            height: isMobile ? 'auto' : 537,
            marginRight: 8,
            maxWidth: '100%',
          }}
        />
      </Box>
      {/* характеристика автомобіля */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "flex-start" : "center"}
        sx={{ mb: '20px' }}
      >
        <Box mt={isMobile ? "20px" : "40px"}>
          <Typography
            fontWeight="bold"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: '600',
              lineHeight: isMobile ? '28px' : '40px',
              letterSpacing: '1%',
              mt: isMobile ? '20px' : '40px',
              mb: isMobile ? '10px' : '20px',
            }}>Special price this year
          </Typography>
          <Box display="flex" flexDirection="row" alignItems={isMobile ? "flex-end" : "center"}>
            <Typography fontFamily="Roboto, sans-serif" fontSize={isMobile ? "32px" : "50px"} fontWeight="bold">$90,000</Typography>
            <Typography fontFamily="Montserrat, sans-serif" fontSize={isMobile ? "10px" : "14px"} fontWeight="semibold" sx={{ ml: 1, mt: isMobile ? '1rem' : '2rem' }}>/$10,000 EVERY MONTH</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? "16px" : "41px"}
          pr={isMobile ? 0 : "67px"}
          pt={isMobile ? "20px" : "65px"}
          width={isMobile ? "100%" : "auto"}
        >
          {[
            { label: "875 MPH", desc: "Top Speed" },
            { label: "60 LITERS", desc: "Consumpution" },
            { label: "3.2 S", desc: "Acceleration" },
            { label: "5.0", desc: "Safety Rating" }
          ].map((item, idx) => (
            <Box
              key={item.label}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              gap="21px"
              sx={{
                borderRight: (!isMobile && idx < 3) ? '2px solid #000' : 'none',
                borderBottom: (isMobile && idx < 3) ? '2px solid #000' : 'none',
                paddingRight: (!isMobile && idx < 3) ? '16px' : 0,
                paddingBottom: (isMobile && idx < 3) ? '8px' : 0,
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <Typography fontFamily="Montserrat, sans-serif" fontSize={isMobile ? "16px" : "20px"} fontWeight="600">{item.label}</Typography>
              <Typography fontFamily="Montserrat, sans-serif" fontSize={isMobile ? "16px" : "20px"} fontWeight="600">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}>
        {/* Лівий блок — текст */}
        <Box sx={{ maxWidth: isMobile ? '100%' : '500px' }}>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize={isMobile ? "24px" : "36px"}
            fontWeight="800"
            sx={{ mb: '20px', mt: isMobile ? '60px' : '206px', textAlign: isMobile ? 'center' : 'left' }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize={isMobile ? "16px" : "20px"}
            fontWeight="600"
            maxWidth={isMobile ? "100%" : "532px"}
            sx={{ mb: '20px', mt: isMobile ? '20px' : '38px', textAlign: isMobile ? 'center' : 'left' }}
          >
            This service involves repairing or replacing major components of your car, such as the engine, transmission, or suspension.
          </Typography>
          <Box display="flex" justifyContent={isMobile ? "center" : "flex-start"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#202020',
                fontFamily: 'Roboto, sans-serif',
                fontSize: isMobile ? '14px' : '18px',
                color: '#fff',
                textTransform: 'none',
                fontWeight: '600',
                height: isMobile ? '48px' : '63px',
                width: isMobile ? '120px' : '170px',
                mt: '40px',
                px: 4,
                '&:hover': {
                  backgroundColor: '#000',
                },
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>

        {/* Правий блок — картки */}
        <Box sx={{ width: isMobile ? '100%' : '50%', ml: isMobile ? 0 : '15%', mt: isMobile ? '40px' : '179px' }}>
          <Grid container spacing={isMobile ? 2 : 4}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    height: isMobile ? 'auto' : '242px',
                    width: isMobile ? '100%' : '312px',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid #000',
                    borderRadius: '0px',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, width: '100%', height: isMobile ? 'auto' : '242px', backgroundColor: "#FFFAFA" }}>
                    <img src={card.image} alt={card.title} style={{ width: '50px', height: '50px', marginTop: isMobile ? '20px' : '50px', marginLeft: '20px' }} />
                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: isMobile ? '16px' : '20px', fontWeight: '400', mt: isMobile ? "20px" : "35px" }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: isMobile ? '12px' : '14px', maxWidth: '286px', mt: '8px' }}>
                      {card.subtitle}
                    </Typography>
                  </CardContent>
                  {card.divider && <Divider />}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          fontFamily="Montserrat, sans-serif"
          fontSize={isMobile ? "24px" : "36px"}
          fontWeight="800"
          sx={{ mb: '20px', mt: isMobile ? '80px' : '257px', textAlign: isMobile ? 'center' : 'left' }}
        >
          ABOUT US
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize={isMobile ? "18px" : "30px"}
            fontWeight="500"
            maxWidth={isMobile ? "100%" : "532px"}
            sx={{ mb: '20px', mt: isMobile ? '20px' : '48px', textAlign: isMobile ? 'center' : 'left' }}
          >
            WE’RE HERE TO HELP YOU FIND THE PERFECT CAR
          </Typography>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize={isMobile ? "14px" : "20px"}
            fontWeight="600"
            maxWidth={isMobile ? "100%" : "532px"}
            sx={{ mb: '20px', mt: isMobile ? '10px' : '61px', textAlign: isMobile ? 'center' : 'left' }}
          >
            We are committed to providing our customers with the best possible service at a fair price
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <img src={astonmartin} alt="CarRent" style={{ width: isMobile ? '100%' : 1330, height: isMobile ? 'auto' : 672, marginRight: 8, marginTop: isMobile ? '20px' : '61px', maxWidth: '100%' }} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize={isMobile ? "24px" : "36px"}
            fontWeight="800"
            sx={{ mb: '20px', mt: isMobile ? '60px' : '234px', textAlign: isMobile ? 'center' : 'left' }}
          >
            HIGHLIGHT STYLE
          </Typography>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize={isMobile ? "16px" : "24px"}
            fontWeight="600"
            maxWidth={isMobile ? "100%" : "532px"}
            sx={{ mb: '20px', mt: isMobile ? '20px' : '189px', textAlign: isMobile ? 'center' : 'left' }}
          >
            We understand that every event is unique, and we strive to accommodate your individual needs
          </Typography>
        </Box>
        {/* тут карточки зараз зроблю */}
        <Grid container spacing={isMobile ? 2 : 4} justifyContent={isMobile ? "center" : "space-between"}>
          {cars.map((car, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 0, mt: isMobile ? '40px' : '114px' }}>
                <CardMedia
                  component="img"
                  height={isMobile ? "200px" : "472px"}
                  image={car.image}
                  alt={car.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: isMobile ? '18px' : '24px', fontWeight: '800', mb: 1, mt: isMobile ? '10px' : '17px' }}>
                    {car.title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#202020',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: isMobile ? '12px' : '16px',
                      marginTop: '20px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#333',
                      },
                    }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={frame13} alt="CarRent" style={{ width: isMobile ? '100%' : 1320, height: isMobile ? 'auto' : 564, marginRight: 8, marginTop: isMobile ? '60px' : '266px', marginBottom: isMobile ? '40px' : '95px', maxWidth: '100%' }} />
      </Box>
      <Typography variant='h6' sx={{ fontSize: isMobile ? '14px' : undefined, textAlign: 'center' }}>Created by Vladislav Salatenko</Typography>
      <Typography variant='h6' sx={{ fontSize: isMobile ? '14px' : undefined, textAlign: 'center' }}>Designed by Vladislav Moloshnev</Typography>
    </Box>
  );
};
