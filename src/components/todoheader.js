import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/header.module.css';

const Header = ({ headingProp }) => (
  <div className={styles.header}>
    <h1>{headingProp.title}</h1>
    <p>{headingProp.description}</p>
  </div>
);

Header.propTypes = {
  headingProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
