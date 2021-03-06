import React from 'react';
import Total from './Total';
import OptionSummary from './OptionSummary';
	const CartSummary = (props) => {
		const summary = Object.keys(props.selected).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
			const selectedOption = props.selected[feature];
		
			return (
				<div className="summary__option" key={featureHash}>
					<div className="summary__option__label">{feature} </div>
					<div className="summary__option__value">{selectedOption.name}</div>
					<div className="summary__option__cost">
						{props.usCurrencyFormat.format(selectedOption.cost)}
					</div>
				</div>
			);
		});
	
		return (
			<div>
					{summary}
					
					<Total
							usCurrencyFormat={props.usCurrencyFormat}
							selected={props.selected}
					/>
			</div>
	)
}

export default CartSummary; 