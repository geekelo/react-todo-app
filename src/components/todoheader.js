import React from 'react';

const Header = ({ headingProp }) => {
  return (
    <div>
      <h1>{headingProp.title}</h1>
      <p>{headingProp.description}</p>
    </div>
  );
};

export default Header;
