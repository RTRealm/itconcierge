import React from 'react';
import './Service.css';
import bitmap from '../../img/website-bitmap.png';

export default function Service(props) {
	return (
		<div className='service'>
			<img alt='imageService' src={bitmap} className='bitmap' />
			<div className='bodyText'>
				<p>{props.bodylorem}</p>
			</div>
		</div>
	);
}
