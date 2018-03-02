import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';
import styled from 'styled-components';
import { colors } from './base';

const Wrapper = styled.div`
	background-color: ${colors.darkSeeGreen};
	width: 70rem;
	border-radius: 0.4rem;
	margin: 5rem auto 0 auto;
	padding: 1rem;
	box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.5);
`;

class IndecisionApp extends Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	componentDidMount() {
		// fetch data from local storage
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) this.setState(() => ({ options }));
		} catch (e) {
			// Do nothing!
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		// code here
	}

	handleDeleteOptions = () => {
		this.setState(() => ({
			options: [],
		}));
	};

	handleDeleteOption = optionToRemove => {
		this.setState(prevState => ({
			options: prevState.options.filter(option => option !== optionToRemove),
		}));
	};

	handlePick = () => {
		const n = Math.floor(Math.random() * this.state.options.length);
		const picked = this.state.options[n];
		this.setState(() => ({ selectedOption: picked }));
	};

	handleClearPick = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};

	handleAddOption = option => {
		if (!option) {
			return 'Enter valid value to add item!';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists!';
		}
		// if none of the options are true, we'll set the state
		this.setState(() => ({
			options: [...this.state.options, option],
		}));
	};

	render() {
		return (
			<Wrapper>
				<Header
					title="Indecision Application"
					subtitle="Put your life in the hands of a computer!"
				/>
				<Action
					hasOptions={this.state.options.length}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleClearPick={this.handleClearPick}
				/>
			</Wrapper>
		);
	}
}

export default IndecisionApp;

// Local Storage: -> [['only works with string data type']]
// localStorage.setItem('key', 'val')
// localStorage.getItem('key')
// localStorage.removeItem('key');
// localStorage.clear();

// Use Json with localStorage
// JSON.stringify(obj)
// JSON.parse(stringified obj)
