import React from 'react';
import slugify from 'slugify';


const Options = (props) => {
	return props.options.map(item => {
		const itemHash = slugify(JSON.stringify(item));
		const { selected, updateFeature, currencyFormat, feature } = props;

		return (
			<div key={itemHash} className="feature__item">
				<input
					type="radio"
					id={itemHash}
					className="feature__option"
					name={slugify(feature)}
					checked={item.name === selected.name}
					onChange={(e) => updateFeature(feature, item)}
				/>
				<label htmlFor={itemHash} className="feature__label">
					{item.name} ({currencyFormat.format(item.cost)})
				</label>
			</div>
		);
	});
}

export default Options; 