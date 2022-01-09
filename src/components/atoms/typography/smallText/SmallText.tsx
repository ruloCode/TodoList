import React from 'react';
import styles from './smallText.module.scss'

interface IProps {
  children: React.ReactNode;
}
const SmallText: React.FC<IProps> = ({ children }) => {
  return <span className={styles.smallText}>{children}</span>;
};

export { SmallText };
