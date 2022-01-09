import React from 'react';
import styles from './headerText.module.scss'

interface IProps {
  children: React.ReactNode;
}
const HeaderText: React.FC<IProps> = ({ children }) => {
  return <h1 className={styles.headerText}>{children}</h1>;
};

export { HeaderText };
