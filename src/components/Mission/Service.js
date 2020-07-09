import React from 'react';
import './Service.css';

export default function Service(props) {
	return (
		<div className='service'>
			<div className='imageService'>
				<img alt='imageService' src={props.bitmap} className='bitmap' />
			</div>
			<div className='titleText'>{props.titlelorem}</div>
			<div className='bodyText'>
				<p>{props.bodylorem}</p>
			</div>
		</div>
	);
}
