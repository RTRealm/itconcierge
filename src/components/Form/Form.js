import React, { Component } from 'react';
import './Form.css';

import Button from '../Button/Button';

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

	handleClick = async (e) => {
		e.preventDefault();
		const data = {
			name: this.state.subject,
			email: this.state.email,
			body: this.state.body,
		};
		await fetch('https://6qlhgzwief.execute-api.eu-central-1.amazonaws.com/default/mailMe4IT', {
			method: 'POST',
			dataType: 'json',
			crossDomain: 'true',
			contentType: 'application/json; charset=utf-8',
			body: JSON.stringify(data),
		});
		this.clearForm();
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
				<form>
					<input
						className='formField'
						type='text'
						value={this.state.subject}
						name='subject'
						placeholder='temat'
						onChange={this.handleChange}
					/>

					<input
						className='formField'
						type='email'
						value={this.state.email}
						name='email'
						placeholder='adres@email'
						onChange={this.handleChange}
					/>

					<input
						className='formField message'
						type='text'
						value={this.state.body}
						name='body'
						placeholder='jak mozemy pomoc?'
						onChange={this.handleChange}
					/>

					<Button onClick={this.handleClick} text='Wyslij' />
				</form>
			</div>
		);
	}
}
