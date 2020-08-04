import React, { useState } from 'react';
import './Form.css';

import Button from '../Button/Button';

import { Text, TextFunc } from '../../container/Language';

export default function Form() {
	const [subject, setSubject] = useState('');
	const [email, setEmail] = useState('');
	const [body, setBody] = useState('');

	function textBodyFunc(text) {
		return <TextFunc tid={text} />;
	}

	function textBody(text) {
		return Text(text);
	}

	async function handleClick(e) {
		e.preventDefault();
		const data = {
			name: subject,
			email: email,
			body: body,
		};
		await fetch('https://6qlhgzwief.execute-api.eu-central-1.amazonaws.com/default/mailMe4IT', {
			method: 'POST',
			dataType: 'json',
			crossDomain: 'true',
			contentType: 'application/json; charset=utf-8',
			body: JSON.stringify(data),
		});
		clearForm();
	}

	function clearForm() {
		setSubject('');
		setEmail('');
		setBody('');
	}

	return (
		<div>
			<form>
				<input
					className='formField'
					type='text'
					value={subject}
					name='subject'
					placeholder={textBody('formSubject')}
					onChange={(e) => setSubject(e.target.value)}
				/>

				<input
					className='formField'
					type='email'
					value={email}
					name='email'
					placeholder={textBody('formEmail')}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<textarea
					className='formField message'
					rows='8'
					value={body}
					name='body'
					placeholder={textBody('formMsg')}
					onChange={(e) => setBody(e.target.value)}
				/>
				<Button onClick={handleClick} text={textBodyFunc('sendButtonText')} />
			</form>
		</div>
	);
}

// export default class Form extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			subject: '',
// 			email: '',
// 			body: '',
// 		};
// 	}

// 	handleChange = (event) => {
// 		this.setState({
// 			[event.target.name]: event.target.value,
// 		});
// 	};

// 	textBodyFunc = (text) => {
// 		return <TextFunc tid={text} />;
// 	};

// 	textBody = (text) => {
// 		return Text(text);
// 	};

// 	handleClick = async (e) => {
// 		e.preventDefault();
// 		const data = {
// 			name: this.state.subject,
// 			email: this.state.email,
// 			body: this.state.body,
// 		};
// 		await fetch('https://6qlhgzwief.execute-api.eu-central-1.amazonaws.com/default/mailMe4IT', {
// 			method: 'POST',
// 			dataType: 'json',
// 			crossDomain: 'true',
// 			contentType: 'application/json; charset=utf-8',
// 			body: JSON.stringify(data),
// 		});
// 		this.clearForm();
// 	};

// 	clearForm = () => {
// 		this.setState({
// 			subject: '',
// 			email: '',
// 			body: '',
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<form>
// 					<input
// 						className='formField'
// 						type='text'
// 						value={this.state.subject}
// 						name='subject'
// 						placeholder='temat'
// 						onChange={this.handleChange}
// 					/>

// 					<input
// 						className='formField'
// 						type='email'
// 						value={this.state.email}
// 						name='email'
// 						placeholder='adres@email'
// 						onChange={this.handleChange}
// 					/>

// 					<textarea
// 						className='formField message'
// 						rows='8'
// 						value={this.state.body}
// 						name='body'
// 						placeholder={this.textBodyFunc('formMsg')}
// 						onChange={this.handleChange}
// 					/>
// 					<Button onClick={this.handleClick} text={this.textBodyFunc('sendButtonText')} />
// 				</form>
// 			</div>
// 		);
// 	}
// }
