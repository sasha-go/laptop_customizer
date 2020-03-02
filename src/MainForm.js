import React, { Component } from 'react';
import Features from './Features';

const MainForm = (props) => {
	
	return Object.keys(props.features).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		const { selected, updateFeature, currencyFormat, features } = props;

		return <Features key={featureHash} feature={feature} options={features[feature]} currencyFormat={currencyFormat} updateFeature={updateFeature} selected={selected[feature]} />
		}
	);
}

export default MainForm;