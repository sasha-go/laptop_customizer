import React, { Component } from 'react';
import Fieldset from './Fieldset';


const Features = (props) => {
	return Object.keys(props.features).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		const { selected, updateFeature, currencyFormat, features } = props;

		return <Fieldset key={featureHash} feature={feature} options={features[feature]} currencyFormat={currencyFormat} updateFeature={updateFeature} selected={selected[feature]} />
		}
	);
}

export default Features;