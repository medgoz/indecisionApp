import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends Component {
	state = {
		options: [], //['Thing one', 'Thing two', 'Thing three'],
	};

	handleDeleteOptions = () => {
		this.setState(() => ({
			options: [],
		}));
	};

	handlePick = () => {
		const n = Math.floor(Math.random() * this.state.options.length);
		const picked = this.state.options[n];
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
			<div>
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
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

export default IndecisionApp;
