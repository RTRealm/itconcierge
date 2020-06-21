import React from 'react';
import './Offer.css';

export default function Offer(props) {
	const rightStyle = {
		textAlign: 'right',
	};
	const screenWidth = window.innerWidth;
	console.log(screenWidth);
	if (screenWidth > 850) {
		if (props.alignimage === 'left') {
			return (
				<div className='offerbody'>
					<img alt='offer' src={props.offerimage}></img>
					<div>
						<p className='offerBodyTitle'>{props.offertitle}</p>
						<p className='offerBodyText'>{props.offertext}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className='offerbody'>
					<div style={rightStyle}>
						<p className='offerBodyTitle'>{props.offertitle}</p>
						<p className='offerBodyText'>{props.offertext}</p>
					</div>
					<img alt='offer' src={props.offerimage}></img>
				</div>
			);
		}
	}
	return (
		<div className='offerbody'>
			<div>
				<p className='offerBodyTitle'>{props.offertitle}</p>
				<p className='offerBodyText'>{props.offertext}</p>
			</div>
			<img alt='offer' src={props.offerimage}></img>
		</div>
	);
}
