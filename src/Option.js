import React from 'react';
import styled from 'styled-components';
import { colors } from './base';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.6rem;
	margin-bottom: 1rem;
	border-bottom: 0.1rem solid ${colors.darkSeeGreen};
	padding: 1rem;
	color: #fff;
`;
const Button = styled.button`
	background-color: #915a51;
	color: #fff;
	border: none;
	border-radius: 0.4rem;
	padding: 0.5rem 1rem;
	font-size: 1.3rem;
`;

const Option = props => {
	return (
		<Wrapper>
			<span>{props.optionText}</span>
			<Button onClick={() => props.handleDeleteOption(props.optionText)}>
				remove
			</Button>
		</Wrapper>
	);
};

export default Option;
