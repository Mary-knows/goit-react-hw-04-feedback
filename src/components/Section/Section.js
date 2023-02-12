import React from 'react';
import PropTypes from 'prop-types';
import './Section.css'

const Section = ({ title, children }) => ( 
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;