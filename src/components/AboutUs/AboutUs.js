import React from 'react';
import './AboutUs.css';

import separator from '../../img/website-line@2x.png';

export default function AboutUs() {
	return (
		<div className='aboutUsContent'>
			<p className='title'>About Us</p>
			<img alt='separator' src={separator}></img>
			<p className='description'>
				4ITS focuses on technology outsourcing and IT solutions. We leverage on the team's decades
				long experience in the areas of IT departments, coding as well as running business
				organizations and projects.
			</p>
		</div>
	);
}
