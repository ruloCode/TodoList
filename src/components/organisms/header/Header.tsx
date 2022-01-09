import React from 'react';
import { Flex} from '@vitau/layout';
import { ProfilePicture } from '../../atoms/ProfilePicture/ProfilePicture';
import { HeaderText } from '../../atoms/typography/headerText/HeaderText';
import { ProgressBar } from '../../atoms/progressBar/ProgressBar';
import { SmallText } from '../../atoms/typography/smallText/SmallText';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Flex justifyContent='flex-end'>
        <SmallText>Sunday, January 08</SmallText>
      </Flex>
      <Flex justifyContent='space-between' >
        <HeaderText>
          <span>GET</span>
          <br />
          SH<span>IT</span>
          <br />
          <span>DONE.</span>
        </HeaderText>
        <ProfilePicture />
      </Flex>
      <ProgressBar />
    </header>
  );
};

export { Header };
