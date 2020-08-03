import React from 'react';
import './AboutUs.css';

import { Text } from '../../container/Language';

import separator from '../../img/website-line@2x.png';

export default function AboutUs(props) {
	return (
		<div className='aboutUsContent'>
			<p className='title' style={{ color: props.color }}>
				{Text(props.lorem)}
			</p>
			<img alt='separator' src={separator} className='separator'></img>
			{props.classOption === 'phoneNumber' ? (
				<div className='description'>
					<a href='tel:+48736861191' className={`description ${props.classOption}`}>
						<p>
							<i className='fas fa-phone'></i>
							&nbsp;&nbsp;{Text(props.bodylorem)}
						</p>
					</a>
				</div>
			) : (
				<p className='description'>{Text(props.bodylorem)}</p>
			)}
		</div>
	);
}
