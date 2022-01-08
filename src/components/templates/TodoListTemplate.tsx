import React from 'react';
import styles from './todoListTemplate.module.scss';

interface IProps {
  children: React.ReactNode;
}

const TodoListTemplate: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  return <div className={styles.todoListLayOut}>{children}</div>;
};

export { TodoListTemplate };
