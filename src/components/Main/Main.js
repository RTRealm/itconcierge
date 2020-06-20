import React from 'react';
import './Main.css';
import mainpicture from '../../img/website-group.png';

export default function Main() {
	return (
		<div className='mainContent'>
			<div className='maintitle'>
				<p>We deliver the best support</p>
			</div>
			<img alt='main' src={mainpicture} className='mainpicture'></img>
		</div>
	);
}
