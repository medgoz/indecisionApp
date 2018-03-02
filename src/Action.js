import React from 'react';
import styled from 'styled-components';
import { colors } from './base';

const Button = styled.button`
	border: none;
	border-radius: 0.4rem;
	box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
	display: block;
	width: 70%;
	padding: 1rem 2rem;
	font-size: 2rem;
	background-color: ${colors.darkSalmon};
	color: #fff;
	margin: 1rem auto 0 auto;
	outline-style: none;
	transition: all 0.1s;

	&:hover {
		transform: translateY(-0.1rem);
	}

	&:active {
		transform: translateY(0.1rem);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
	}
`;

const Action = props => {
	return (
		<React.Fragment>
			<Button
				onClick={() => props.handlePick()}
				// notice that disabled={a number} -> it's state is truthy (num > 0)and falsy (num === 0)
				disabled={!props.hasOptions}
			>
				What should I do?
			</Button>
		</React.Fragment>
	);
};

export default Action;
