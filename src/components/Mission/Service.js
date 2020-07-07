import React from 'react';
import './Service.css';

export default function Service(props) {
	return (
		<div className='service'>
			<img alt='imageService' src={props.bitmap} className='bitmap' />
			<div className='bodyText'>{props.bodylorem}</div>
		</div>
	);
}
