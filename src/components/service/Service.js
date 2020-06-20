import React from 'react';
import './Service.css';
import bitmap from '../../img/website-bitmap.png';

export default function Service() {
	return (
		<div className='service'>
			<img alt='imageService' src={bitmap} className='bitmap' />
			<div className='bodyText'>
				App dev ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua.
			</div>
		</div>
	);
}
