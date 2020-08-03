import React from 'react';
import './Header.css';

import Button from '../Button/Button';

import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { Text } from '../../container/Language';

export default function Header(props) {
	function handleClick(e) {
		e.preventDefault();
		props.scrollpoint.current.scrollIntoView();
	}

	return (
		<React.Fragment>
			<div className='headerItemLogo'>
				<img
					alt='4IT logo'
					src='https://res.cloudinary.com/ohcash/image/upload/v1594239068/itconcierge/logo4.svg'
				/>
			</div>
			<div className='header'>
				<div className='headerItem menu'>
					<a href='#onas'>
						<p>{Text('aboutUsHeader')}</p>
					</a>
				</div>
				<div className='headerItem menu'>
					<a href='#misja'>
						<p>{Text('startHeader')}</p>
					</a>
				</div>
				<div className='headerItem'>
					<a href='#uslugi'>
						<p>{Text('servicesHeader')}</p>
					</a>
				</div>
				<div className='headerItem'>
					<Button text={Text('contactButton')} onClick={handleClick}></Button>
				</div>
				<LanguageSelector />
			</div>
		</React.Fragment>
	);
}
