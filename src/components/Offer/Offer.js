import React from 'react';
import './Offer.css';

import { Text } from '../../container/Language';

export default function Offer(props) {
	const rightStyle = {
		textAlign: 'left',
	};
	const screenWidth = window.innerWidth;
	const offerBodySplit = (
		<React.Fragment>
			<li>
				{Text(props.offerlist1)}
				<br />
			</li>
			<li>
				{Text(props.offerlist2)}
				<br />
			</li>
			<li>
				{Text(props.offerlist3)}
				<br />
			</li>
			<li>
				{Text(props.offerlist4)}
				<br />
			</li>
		</React.Fragment>
	);
	if (screenWidth > 850) {
		if (props.alignimage === 'left') {
			return (
				<div className='offerbody'>
					<img alt='offer' src={props.offerimage}></img>
					<div className='offertext'>
						<p className='offerBodyTitle'>{Text(props.offertitle)}</p>
						<p className='offerBodyText'>{offerBodySplit}</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className='offerbody'>
					<div style={rightStyle} className='offertext'>
						<p className='offerBodyTitle'>{Text(props.offertitle)}</p>
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
				<p className='offerBodyTitle'>{Text(props.offertitle)}</p>
				<p className='offerBodyText'>{offerBodySplit}</p>
			</div>
			<img alt='offer' src={props.offerimage}></img>
		</div>
	);
}
