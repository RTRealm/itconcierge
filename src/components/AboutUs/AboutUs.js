import React from 'react';
import './AboutUs.css';

import separator from '../../img/website-line@2x.png';

export default function AboutUs(props) {
	return (
		<div className='aboutUsContent'>
			<p className='title'>{props.lorem}</p>
			<img alt='separator' src={separator}></img>
			<p className='description'>{props.bodylorem}</p>
		</div>
	);
}
