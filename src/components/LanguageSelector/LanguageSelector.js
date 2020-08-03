import React, { useContext } from 'react';
import { languageOptions } from '../../languages';
import { LanguageContext } from '../../container/Language';

import './LanguageSelector.css';

export default function LanguageSelector() {
	const languageContext = useContext(LanguageContext);

	const handleLanguageChange = (event) => {
		const selectedLanguage = languageOptions.find((item) => item.id === event.target.value);
		languageContext.setLanguage(selectedLanguage);
		localStorage.setItem('language', selectedLanguage.id);
	};

	return (
		<div className='selector'>
			<select
				onChange={handleLanguageChange}
				value={languageContext.language.id}
				style={{
					backgroundColor: '#9032eb',
					border: 'none',
					fontSize: '15px',
					fontWeight: 'bold',
					color: 'white',
					outline: 'none',
				}}
			>
				{languageOptions.map((item) => (
					<option key={item.id} value={item.id}>
						{item.text}
					</option>
				))}
			</select>
		</div>
	);
}
