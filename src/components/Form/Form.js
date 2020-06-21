import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			subject: '',
			email: '',
			body: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	// handleClick = async (e) => {
	// 	e.preventDefault();
	// 	const data = {
	// 		name: this.state.subject,
	// 		email: this.state.email,
	// 		body: this.state.body,
	// 	};
	// 	await fetch(
	// 		'https://ju7qrql2j0.execute-api.eu-central-1.amazonaws.com/mailUsDeploy/contactus',
	// 		{
	// 			method: 'POST',
	// 			dataType: 'json',
	// 			crossDomain: 'true',
	// 			contentType: 'application/json; charset=utf-8',
	// 			body: JSON.stringify(data),
	// 		}
	// 	);
	// 	this.clearForm();
	// };

	handleClick = (e) => {
		e.preventDefault();
		console.log('submitted!');
	};

	clearForm = () => {
		this.setState({
			subject: '',
			email: '',
			body: '',
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleClick}>
					<input
						type='text'
						value={this.state.subject}
						name='subject'
						placeholder='temat'
						onChange={this.handleChange}
					/>
					<br />
					<input
						type='email'
						value={this.state.email}
						name='email'
						placeholder='adres email'
						onChange={this.handleChange}
					/>
					<br />
					<input
						type='text'
						value={this.state.body}
						name='body'
						placeholder='jak mozemy pomoc?'
						onChange={this.handleChange}
					/>
					<br />
					<input type='submit' />
				</form>
			</div>
		);
	}
}
