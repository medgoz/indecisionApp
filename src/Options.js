import React from 'react';
import Option from './Option';
import styled from 'styled-components';
import { colors } from './base';

const Wrapper = styled.div`
	background-color: ${colors.darkerSeeGreen};
	padding: 1rem 1.5rem;
	margin-top: 2rem;
	border-radius: 0.4rem;
`;

const P = styled.p`
	color: ${colors.lightOlive};
	padding: 1rem;
	font-size: 2rem;
	text-align: center;
`;

const Button = styled.button`
	padding: 1rem 1.5rem;
	font-size: 1.6rem;
	background-color: #8c3f32;
	color: #fff;
	border: none;
	border-radius: 0.4rem;
	margin-bottom: 1rem;
`;

const Options = props => {
	return (
		<Wrapper>
			<Button onClick={props.handleDeleteOptions}>Remove All</Button>
			{props.options.length === 0 && <P>Add an option to get started!</P>}
			{props.options.map((option, index) => {
				return (
					<Option
						key={index}
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				);
			})}
		</Wrapper>
	);
};

export default Options;
