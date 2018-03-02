import React from 'react';
import styled from 'styled-components';
import { colors } from './base';

const Wrapper = styled.div`
	padding: 1rem 1.5rem;
	background-color: ${colors.darkerSeeGreen};
	border-top: 0.1rem solid ${colors.darkSeeGreen};
	border-radius: 0.4rem;
`;

const Form = styled.form`
	position: relative;

	> input {
		width: 100%;
		height: 4rem;
		background-color: ${colors.darkSeeGreen};
		border: 0.1rem solid ${colors.darkSalmon};
		border-radius: 0.4rem;
		font-size: 1.6rem;
		text-indent: 1rem;
		color: #fff;
	}

	> button {
		position: absolute;
		right: 0;
		height: 100%;
		border: none;
		border-radius: 0.4rem;
		background-color: ${colors.darkSalmon};
		color: #fff;
		padding: 0.5rem 1rem;
		font-size: 1.5rem;
	}
`;

class AddOption extends React.Component {
	state = {
		textValue: '',
		error: undefined,
	};

	handleAddOption = evt => {
		evt.preventDefault();
		const option = evt.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState({ error });
		if (!error) this.setState(() => ({ textValue: '' }));
	};

	handleTextInput = evt => {
		const text = evt.target.value;
		this.setState({ textValue: text });
	};

	render() {
		return (
			<Wrapper>
				{this.state.error && <p>{this.state.error}</p>}
				<Form action="#" onSubmit={this.handleAddOption}>
					<input
						type="text"
						name="option"
						value={this.state.textValue}
						onChange={this.handleTextInput}
					/>
					<button type="submit">Add Option</button>
				</Form>
			</Wrapper>
		);
	}
}

export default AddOption;
