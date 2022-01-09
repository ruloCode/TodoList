import React from 'react';
import styles from './progressBar.module.scss';

const ProgressBar: React.FC = () => {
  return <progress className={styles.ProgressBar} max="100" value="50" />;
};

export  {ProgressBar};
