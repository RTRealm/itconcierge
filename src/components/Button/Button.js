import React from 'react';
import './Button.css';

export default function Button(props) {
	return (
		<div>
			<button className='pseudoButton pseudoButton-1' onClick={props.onClick}>
				{props.text}
			</button>
		</div>
	);
}
