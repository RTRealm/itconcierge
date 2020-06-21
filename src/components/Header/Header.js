import React from 'react';
import './Header.css';

import Button from '../Button/Button';

export default function Header(props) {
	function handleClick(e) {
		e.preventDefault();
		props.scrollpoint.current.scrollIntoView();
	}
	return (
		<div className='header'>
			<div className='headerItem'>
				<a href='#onas'>
					<p>O nas</p>
				</a>
			</div>
			<div className='headerItem'>
				<a href='#misja'>
					<p>Misja</p>
				</a>
			</div>
			<div className='headerItem'>
				<a href='#uslugi'>
					<p>Usługi</p>
				</a>
			</div>
			<div className='headerItem'>
				<Button text='kontakt' onClick={handleClick}></Button>
			</div>
		</div>
	);
}
