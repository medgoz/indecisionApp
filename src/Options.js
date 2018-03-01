import React from 'react';
import Option from './Option';

const Options = props => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.map((option, index) => {
				return <Option key={index} optionText={option} />;
			})}
		</div>
	);
};

export default Options;
