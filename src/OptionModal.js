import React from 'react';
import styled from 'styled-components';

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
	background-color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const OptionModal = props => (
	<Modal>
		<Overlay onClick={props.handleClearPick} open={props.selectedOption}>
			<Content>
				<h3>Selected Option</h3>
				{props.selectedOption && <p>{props.selectedOption}</p>}
				<button onClick={props.handleClearPick}>Close</button>
			</Content>
		</Overlay>
	</Modal>
);

export default OptionModal;
