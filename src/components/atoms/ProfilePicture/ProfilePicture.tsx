import React from 'react';
import Image from 'next/image';
import ProfileImageURL from '../../../assets/images/rulo.png';
import styles from './profilePicture.module.scss';

const ProfilePicture = () => {
  return (
    <div className={styles.profilePicture}>
      <Image
      objectFit="contain"
      src={ProfileImageURL} alt="Profile image" />
    </div>
  );
};

export { ProfilePicture };
