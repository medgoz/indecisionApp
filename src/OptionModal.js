import React from 'react';
import styled from 'styled-components';
import { colors } from './base';

const Modal = styled.div``;
const Overlay = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	display: ${props => (props.open ? 'block' : 'none')};
`;
const Content = styled.div`
	width: 30rem;
	height: 30rem;
	background-color: ${colors.darkSeeGreen};
	position: absolute;
	top: ${props => (props.open ? '50%' : 0)};
	left: 50%;
	transform: translate(-50%, -50%);
	visibility: ${props => (props.open ? 'visible' : 'hidden')};
	padding: 2rem;
	transition: top 0.5s;
`;

const H3 = styled.h3`
	text-align: center;
	font-size: 2rem;
	padding: 1rem;
	margin: 1rem 0;
	text-transform: uppercase;
	color: ${colors.lightOlive};
`;

const P = styled.p`
	text-align: center;
	font-size: 1.6rem;
	color: #fff;
	padding: 1rem;
`;

const Button = styled.button`
	display: block;
	border: none;
	padding: 1rem 2rem;
	font-size: 1.6rem;
	background-color: ${colors.darkSalmon};
	color: #fff;
	margin: 2rem auto 0 auto;
	border-radius: 0.4rem;
`;

const OptionModal = props => {
	return (
		<Modal>
			<Overlay onClick={props.handleClearPick} open={props.selectedOption} />
			<Content open={props.selectedOption}>
				<H3>Selected Option</H3>
				{props.selectedOption && <P>{props.selectedOption}</P>}
				<Button onClick={props.handleClearPick}>Close</Button>
			</Content>
		</Modal>
	);
};

export default OptionModal;
