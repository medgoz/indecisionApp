import React from 'react';
import styled from 'styled-components';
import { colors } from './base';

const H1 = styled.h1`
	text-align: center;
	font-size: 2.5rem;
	text-transform: uppercase;
	padding: 1rem 2rem 0.5rem 2rem;
	color: ${colors.lightOlive};
`;

const H2 = H1.extend`
	font-size: 1.5rem;
	padding: 0;
	margin-bottom: 3rem;
	color: ${colors.darkerSeeGreen};
	padding-top: 0;
`;

const Header = props => {
	return (
		<div>
			<H1>{props.title}</H1>
			<H2>{props.subtitle}</H2>
		</div>
	);
};

export default Header;
