import React from 'react';
import './Offer.css';

export default function Offer(props) {
	const rightStyle = {
		textAlign: 'left',
	};
	const screenWidth = window.innerWidth;
	const offerBodySplit = props.offertext1.split('n>').map(function (item, key) {
		return (
			<li key={key}>
				{item}
				<br />
			</li>
		);
	});
	if (screenWidth > 850) {
		if (props.alignimage === 'left') {
			return (
				<div className='offerbody'>
					<img alt='offer' src={props.offerimage}></img>
					<div className='offertext'>
						<p className='offerBodyTitle'>{props.offertitle}</p>
						<p className='offerBodyText'>{offerBodySplit}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className='offerbody'>
					<div style={rightStyle} className='offertext'>
						<p className='offerBodyTitle'>{props.offertitle}</p>
						<p className='offerBodyText'>{offerBodySplit}</p>
					</div>
					<img alt='offer' src={props.offerimage}></img>
				</div>
			);
		}
	}
	return (
		<div className='offerbody'>
			<div className='offertext'>
				<p className='offerBodyTitle'>{props.offertitle}</p>
				<p className='offerBodyText'>{offerBodySplit}</p>
			</div>
			<img alt='offer' src={props.offerimage}></img>
		</div>
	);
}
