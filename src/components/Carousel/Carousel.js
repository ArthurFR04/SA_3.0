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

import { PostSearch } from '../../pages/Post/PostLogic'

import styles from './Carousel.module.css'


const useStyles = createStyles((theme, _theme, _params) => ({
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
    fontWeight: 1000,
    // color: theme.white,
    color: '#2399AA',
    lineHeight: 1.5,
    fontSize: 40,
    marginTop: theme.spacing.xs,
    backgroundColor: 'rgba(255,255,255,0.63)',
    padding: 5,
    borderRadius: 10
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


  let Card = ({ id, foto, titulo }) => {

    let GoPost = () => {
      PostSearch(id)
    }
    const { classes } = useStyles();
  
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${JSON.parse(localStorage.getItem(foto))})` }}
        className={classes.card}
        onClick={GoPost}
      >
        <div styles=" width: 100%; heigth: 100% ">
        {/* <img src={JSON.parse(localStorage.getItem(foto)) } styles="box-sizing: border-box; width: 100%"/> */}
          <Title order={3} className={classes.title} >
            {titulo}
          </Title>
        </div>
        <Button className={styles.botao}>
        </Button>
      </Paper>
    );
  }

  let data

  if ( JSON.parse(localStorage.getItem('data')) ) {
    data = JSON.parse(localStorage.getItem('data'))
  }
  else { 
    data = []
  }
  
  fetch('https://sa-3-back.herokuapp.com/api/postagem', {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((json) => {
      data = json.data
      localStorage.setItem('data', JSON.stringify(data))
      
    })
  

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
    className={styles.carousel}
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