import React, { Component } from 'react';
import './App.css';
import Options from './Options';


const Features = (props) => {
	return Object.keys(props.features).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		// const options = props.features[feature].map(item => {
		// 	const itemHash = slugify(JSON.stringify(item));

		// 	return (
		// 		<div key={itemHash} className="feature__item">
		// 			<input
		// 				type="radio"
		// 				id={itemHash}
		// 				className="feature__option"
		// 				name={slugify(feature)}
		// 				checked={item.name === props.selected[feature].name}
		// 				onChange={e => props.updateFeature(feature, item)}
		// 			/>
		// 			<label htmlFor={itemHash} className="feature__label">
		// 				{item.name} ({props.currencyFormat.format(item.cost)})
		// 			</label>
		// 		</div>
		// 	);
		// });

		return (
			<fieldset className="feature" key={featureHash}>
				<legend className="feature__name">
					<h3>{feature}</h3>
				</legend>
				<Options feature={feature} features={props.features} selected={props.selected} currencyFormat={props.currencyFormat}/>
			</fieldset>
		);
		})
}

export default Features;  