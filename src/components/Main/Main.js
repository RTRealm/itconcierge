import React from 'react';
import './Main.css';

import Fade from 'react-reveal/Fade';

export default function Main() {
	return (
		<div className='mainContent'>
			<Fade left>
				<div className='maintitle'>
					<p className='mainText'>Twój zespół IT - 4IT Support</p>
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
