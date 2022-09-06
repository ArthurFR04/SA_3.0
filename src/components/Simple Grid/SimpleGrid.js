import React from 'react';
import { SimpleGrid } from '@mantine/core';

import styles from './SimpleGridStyle.module.css'


function Grid() {

  return (
    <SimpleGrid
      cols={4}
      className={styles.grid}
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
      ]}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}

export default Grid