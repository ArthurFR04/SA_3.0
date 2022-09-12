import React from 'react';

import {
  createStyles,
  Paper,
  Title,
  Button,

} from '@mantine/core';
import { SimpleGrid } from '@mantine/core';

import { PostSearch } from '../../pages/Post/PostLogic'

import styles from './SimpleGridStyle.module.css'

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
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10
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
    >
      <div styles=" width: 100%; heigth: 100% ">
      {/* <img src={JSON.parse(localStorage.getItem(foto)) } styles="box-sizing: border-box; width: 100%"/> */}
        <Title order={3} className={classes.title} >
          {titulo}
        </Title>
      </div>
      <Button onClick={GoPost}>
        Ler
      </Button>
    </Paper>
  );
}


let Grid = (props) => {

  const cards = data.map((item) => (
    <div key={item.title}>
      <Card {...item} />
    </div>
  ));


  return (
    <SimpleGrid
      cols={4}
      className={styles.grid}
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
      ]}
    >
      {cards}

    </SimpleGrid>
  )
}


export default Grid