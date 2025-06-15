import React from 'react';
import { Box, Button, Typography, Divider, Grid, Card, CardContent, CardMedia } from '@mui/material';
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
        px: 4,
        pb: 8,        // залишаємо нижній padding
        paddingLeft: '80px',
      }}
    >
        <Box display="flex" flexDirection="row">
      {/* Лівий блок — заголовок */}
      <Box>
        <Typography
          fontWeight="bold"
          gutterBottom={false}
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '64px',
            lineHeight: 1,
            pt:'130px',
            mb: 0,
            letterSpacing: '3%',
          }}
        >
          THE EASIEST WAY
        </Typography>
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '64px',
            lineHeight: 1,
            mt: '20px',
          }}
        >
          TO BUY A CAR
        </Typography>
      </Box>

      {/* Правий блок — текст і кнопка */}
      <Box textAlign="left" sx={{ pl: '222px' }}>
        <Typography
          sx={{
            mb: 2,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '24px',
            lineHeight: '35px',
            letterSpacing: '1%',
            pt:'107px',
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
            fontSize: '18px',
            color: '#fff',
            textTransform: 'none',
            fontWeight: '600',
            height: '63px',
            width: '167px',
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
      <Box display="flex" justifyContent="center" alignItems="center" mt='32px' sx={{p: 0}}>
      <img src={dodgeviper1} alt="CarRent" style={{ width: 1330, height: 537, marginRight: 8}} />
      </Box>
      {/* характеристика автомобіля */}
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ mb: '20px' }}>
      <Box  mt="40px"> 
        <Typography
          fontWeight="bold"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '20px',
            fontWeight:'600',
            lineHeight: '40px',
            letterSpacing: '1%',
            mt: '40px',
            mb: '20px',
          }}>Special price this year
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography fontFamily="Roboto, sans-serif" fontSize="50px" fontWeight="bold">$90,000</Typography>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="14px" fontWeight="semibold" sx={{ ml: 1, mt:'2rem' }}>/$10,000 EVERY MONTH</Typography>
          </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap="41px" pr="67px" pt="65px">
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" gap="21px" sx={{ borderRight: '2px solid #000', paddingRight: '16px' }}>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">875 MPH</Typography>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">Top Speed</Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" gap="21px" sx={{ borderRight: '2px solid #000', paddingRight: '16px' }}>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">60 LITERS</Typography>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">Consumpution</Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" gap="21px" sx={{ borderRight: '2px solid #000', paddingRight: '16px' }}>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">3.2 S</Typography>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">Acceleration</Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" gap="21px">
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">5.0</Typography>
            <Typography fontFamily="Montserrat, sans-serif" fontSize="20px" fontWeight="600">Safety Rating</Typography>
          </Box>
          </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100vw',  // Не дозволяє ширині виходити за межі вікна
        overflowX: 'hidden', // Запобігає скролу
        boxSizing: 'border-box',
      }}>
        {/* Лівий блок — текст */}
        <Box sx={{ maxWidth: '500px' }}>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize="36px"
            fontWeight="800"
            sx={{ mb: '20px', mt:'206px' }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            fontFamily="Montserrat, sans-serif"
            fontSize="20px"
            fontWeight="600"
            maxWidth="532px"
            sx={{ mb: '20px', mt:'38px' }}
          >
            This service involves repairing or replacing major components of your car, such as the engine, transmission, or suspension.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#202020',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '18px',
              color: '#fff',
              textTransform: 'none',
              fontWeight: '600',
              height: '63px',
              width: '170px',
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

        {/* Правий блок — картки */}
        <Box sx={{ width: '50%', ml:'15%', mt:'179px'}}>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card 
                  sx={{ 
                    height: '242px', 
                    width:'312px',
                    display: 'flex', 
                    flexDirection: 'column',
                    border:'2px solid #000',
                    borderRadius: '0px',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, width:'100%', height:'242px', backgroundColor:"#FFFAFA" }}>
                    <img src={card.image} alt={card.title} style={{ width: '50px', height: '50px', marginTop:'50px', marginLeft:'20px' }} />
                    <Typography sx={{fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '400',mt:"35px" }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px', maxWidth:'286px', mt:'8px' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="36px"
                fontWeight="800"
                sx={{ mb: '20px', mt:'257px' }}
              >
                ABOUT US
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}> 
                <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="30px"
                fontWeight="500"
                maxWidth="532px"
                sx={{ mb: '20px', mt:'48px' }}
              >
                WE’RE HERE TO HELP YOU FIND THE PERFECT CAR
              </Typography>
              <Typography
                fontFamily="Montserrat, sans-serif"
                fontSize="20px"
                fontWeight="600"
                maxWidth="532px"
                sx={{ mb: '20px', mt:'61px' }}
              >
                We are committed to providing our customers with the best possible service at a fair price
              </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <img src={astonmartin} alt="CarRent" style={{ width: 1330, height: 672, marginRight: 8, marginTop:'61px'}} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'column'}}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography
                  fontFamily="Montserrat, sans-serif"
                  fontSize="36px"
                  fontWeight="800"
                  sx={{ mb: '20px', mt:'234px' }}
                >
                  HIGHLIGHT STYLE
                </Typography>
                <Typography
                  fontFamily="Montserrat, sans-serif"
                  fontSize="24px"
                  fontWeight="600"
                  maxWidth="532px"
                  sx={{ mb: '20px', mt:'189px' }}
                >
                  We understand that every event is unique, and we strive to accommodate your individual needs
                </Typography>
              </Box>
              {/* тут карточки зараз зроблю */}
              <Grid container spacing={4} justifyContent="space-between">
                {cars.map((car, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ borderRadius: 2, boxShadow: 0, mt:'114px' }}>
                      <CardMedia
                        component="img"
                        height="472px"
                        image={car.image}
                        alt={car.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography sx={{fontFamily: 'Montserrat, sans-serif', fontSize: '24px', fontWeight: '800', mb: 1, mt:'17px' }}>
                          {car.title}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: '#202020',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '16px',
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
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={frame13} alt="CarRent" style={{ width: 1320, height: 564, marginRight: 8, marginTop:'266px', marginBottom:'95px'}} />
                </Box>
                <Typography variant='h6'>Created by Vladislav Salatenko</Typography>
                <Typography variant='h6'>Designed by Vladislav Moloshnev</Typography>
    </Box>
  );
};
