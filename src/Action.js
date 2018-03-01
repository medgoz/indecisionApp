import React from 'react';

const Action = props => {
	return (
		<div>
			<button
				onClick={() => props.handlePick()}
				// notice that disabled={a number} -> it's state is truthy (num > 0)and falsy (num === 0)
				disabled={!props.hasOptions}
			>
				What should I do?
			</button>
		</div>
	);
};

export default Action;
