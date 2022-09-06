import React from 'react';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
// import { useMediaQuery } from '@mantine/hooks';
import { 
  createStyles, 
  Paper, 
  Text, 
  Title, 
  Button, 
  // useMantineTheme 

} from '@mantine/core';

import { RiArrowDropLeftLine , RiArrowDropRightLine } from "react-icons/ri";


const useStyles = createStyles((theme, _theme, _params, getRef) => ({
  card: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

}));

const buttons = createStyles((_theme, _params, getRef) => ({
    controls: {
      ref: getRef('controls'),
      transition: 'opacity 150ms ease',
      opacity: 0,
    },
  
    root: {
      '&:hover': {
        [`& .${getRef('controls')}`]: {
          opacity: 1,
        },
      },
    },

    

  }));



function Card({ image, title, category }) {

  const { classes } = useStyles();

  return (
    <Paper 
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

const Carrossel = () => {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  const { classes } = buttons();

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
    //   slideSize="50%"
    breakpoints={[
      { maxWidth: 1024, slideSize: '100%' , textSize: '90%'},
      { minWidth: 1024, slideSize: '100%' },
    ]}
      slideSize="100%" 
      height= "100%"
      width= "100%"
      slideGap="xl"
      align="center"
      // slidesToScroll={mobile ? 1 : 2}
      loop 
      withIndicators
      controlsOffset="xl" 
      previousControlIcon={<RiArrowDropLeftLine size={25} />}
      nextControlIcon={<RiArrowDropRightLine size={25} />}

      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: {
          width: 12,
          height: 6,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
            backgroundColor: '#2399AA'
          },
        },
        control: {
          backgroundColor: '#2399AA',
          borderColor: '#2399AA',
          color: '#fff',
          opacity: 1,
          fontWeight: "bold",
          fontSize: 80
        }
        
      }}
      classNames={classes}
    >
      {slides}
    </Carousel>
  );
}

export default Carrossel