import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Mission/Service';
import Offer from './components/Offer/Offer';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import { LanguageProvider } from './container/Language';

class App extends Component {
	render() {
		const refKontakt = React.createRef();
		return (
			<LanguageProvider>
				<div className='app'>
					<Header scrollpoint={refKontakt} />
					<div className='main'>
						<Main />
					</div>
					<div id='onas'>
						<Fade bottom>
							<AboutUs lorem='aboutUsTitle' bodylorem='aboutUsBody' />
						</Fade>
					</div>
					<div id='misja'>
						<AboutUs lorem='howWeWork' />
					</div>
					<Bounce bottom>
						<div className='services'>
							<Service
								titlelorem='serviceRocketTitle'
								bodylorem='serviceRocketBody'
								bitmap={
									'https://res.cloudinary.com/ohcash/image/upload/v1594493260/itconcierge/imgRocket.png'
								}
							/>

							<Service
								titlelorem='serviceClockTitle'
								bodylorem='serviceClockBody'
								bitmap={
									'https://res.cloudinary.com/ohcash/image/upload/v1594493262/itconcierge/imgTime.png'
								}
							/>
							<Service
								titlelorem='comprehTitle'
								bodylorem='comprehBody'
								bitmap={
									'https://res.cloudinary.com/ohcash/image/upload/v1594493266/itconcierge/imgComprehensive.png'
								}
							/>
						</div>
					</Bounce>
					<div className='offerbox'>
						<div className='offerAboutUs' id='uslugi'>
							{/* <div id='uslugi'>
							<AboutUs lorem='Zakres usług' color='white' />
						</div> */}
							<Offer
								alignimage='left'
								offertitle='offerTitle1'
								offerlist1='offerList1a'
								offerlist2='offerList1b'
								offerlist3='offerList1c'
								offerlist4='offerList1d'
								offerimage='https://res.cloudinary.com/ohcash/image/upload/v1594670537/itconcierge/imgHelpdesk1.png'
							/>
							<Offer
								offertitle='offerTitle2'
								offerlist1='offerList2a'
								offerlist2='offerList2b'
								offerlist3='offerList2c'
								offerlist4='offerList2d'
								offerimage='https://res.cloudinary.com/ohcash/image/upload/v1594655717/itconcierge/imgCrisis1.png'
							/>
							<Offer
								alignimage='left'
								offertitle='Bezpieczeństwo'
								offertext1='Zapewnienie kompleksowego bezpieczeństwa danych.n>Testy bezpieczeństwa i wprowadzanie zabezpieczeń.n>Stworzenie rozwiązania wysokiej dostępności.n>Opracowanie i wdrożenie polityki backupu.'
								offerimage='https://res.cloudinary.com/ohcash/image/upload/v1594655336/itconcierge/imgSecurity1.png'
							/>
							<Offer
								offertitle='Środowiska chmurowe'
								offertext1='Migracje do chmury.n>Optymalizacja środowiska.n>Zarządzanie infrastrukturą chmurową.n>AWS, MS Azure, GCP.'
								offerimage='https://res.cloudinary.com/ohcash/image/upload/v1594555798/itconcierge/imgCloud.png'
							/>
						</div>
					</div>
					<div id='kontakt' ref={refKontakt}>
						<AboutUs lorem='contactUs' bodylorem='contactPhone' classOption='phoneNumber' />
					</div>
					<Form />
					<Footer />
				</div>
			</LanguageProvider>
		);
	}
}

export default App;
