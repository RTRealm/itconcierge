import React from 'react';
import './AboutUs.css';

import separator from '../../img/website-line@2x.png';

export default function AboutUs(props) {
	return (
		<div className='aboutUsContent'>
			<p className='title' style={{ color: props.color }}>
				{props.lorem}
			</p>
			<img alt='separator' src={separator} className='separator'></img>
			<p className={`description ${props.classOption}`}>{props.bodylorem}</p>
		</div>
	);
}
