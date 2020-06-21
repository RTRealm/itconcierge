import React from 'react';
import './Header.css';

export default function Header() {
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
				<button className='pseudoButton pseudoButton-1'>
					<a href='#kontakt'>
						<p id='kontakt'>Kontakt</p>
					</a>
				</button>
			</div>
		</div>
	);
}
