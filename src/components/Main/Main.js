import React from 'react';
import './Main.css';

import Fade from 'react-reveal/Fade';

import { Text } from '../../container/Language';

export default function Main() {
	return (
		<div className='mainContent'>
			<Fade left>
				<div className='maintitle'>
					<p className='mainText'>{Text('mainText')}</p>
				</div>
			</Fade>
			<Fade right>
				<img
					alt='main'
					src='https://res.cloudinary.com/ohcash/image/upload/v1594056489/itconcierge/imgMain.png'
					className='mainpicture'
				></img>
			</Fade>
		</div>
	);
}
