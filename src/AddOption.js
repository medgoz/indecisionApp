import React from 'react';

class AddOption extends React.Component {
	state = {
		textValue: '',
		error: undefined,
	};

	handleAddOption = evt => {
		evt.preventDefault();
		const option = evt.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState({ textValue: '', error });
	};

	handleTextInput = evt => {
		const text = evt.target.value;
		this.setState({ textValue: text });
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form action="#" onSubmit={this.handleAddOption}>
					<input
						type="text"
						name="option"
						value={this.state.textValue}
						onChange={this.handleTextInput}
					/>
					<button type="submit">Add Option</button>
				</form>
			</div>
		);
	}
}

export default AddOption;
