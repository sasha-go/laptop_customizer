import React, { Component } from 'react';
import Options from './Options';
import slugify from 'slugify';

const Fieldset = (props) => {
  const { selected, updateFeature, currencyFormat, feature, options } = props;

  return (
    <fieldset className="feature">
      <legend classname="feature__name">
        <h3>{feature}</h3>
      </legend>
      <Options feature={feature} options={options} selected={selected} currencyFormat={currencyFormat} updateFeature={updateFeature}/>
    </fieldset>
  )  
}

export default Fieldset;