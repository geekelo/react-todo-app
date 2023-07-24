import React from 'react';
import styles from './styles/header.module.css'

const Header = ({ headingProp }) => {
  return (
    <div className={styles.header}>
      <h1>{headingProp.title}</h1>
      <p>{headingProp.description}</p>
    </div>
  );
};

export default Header;
