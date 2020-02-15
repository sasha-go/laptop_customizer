import React, { Component } from 'react';
import './App.css';
import Options from './Options';


const Features = (props) => {
	return Object.keys(props.features).map((feature, idx) => {
		const featureHash = feature + '-' + idx;

		return (
			<fieldset className="feature" key={featureHash}>
				<legend className="feature__name">
					<h3>{feature}</h3>
				</legend>
				<Options feature={feature} features={props.features} selected={props.selected} currencyFormat={props.currencyFormat} updateFeature={props.updateFeature}/>
			</fieldset>
		);
		})
}

export default Features;  