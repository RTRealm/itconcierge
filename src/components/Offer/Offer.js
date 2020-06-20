import React from 'react';
import './Offer.css';

export default function Offer(props) {
	if (props.alignimage === 'left') {
		return (
			<div className='offerbody'>
				<img alt='offer' src={props.offerimage}></img>
				<div>
					<p>{props.offertitle}</p>
					<p>{props.offertext}</p>
				</div>
			</div>
		);
	} else {
		return (
			<div className='offerbody'>
				<div>
					<p>{props.offertitle}</p>
					<p>{props.offertext}</p>
				</div>
				<img alt='offer' src={props.offerimage}></img>
			</div>
		);
	}
}
