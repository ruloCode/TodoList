import React from 'react';
import {Flex, Box} from '@vitau/layout'
import { ProfilePicture } from '../../atoms/ProfilePicture/ProfilePicture';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-date"]} >Sunday, December 26</div>
      <Box width='100%'>
        <Flex justifyContent='space-between' alignItems='center'>
          <h1>Get shit done</h1>
          <ProfilePicture />
        </Flex>
      </Box>
    </div>
  );
};

export { Header };
            