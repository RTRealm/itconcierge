import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Mission/Service';
import Offer from './components/Offer/Offer';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		const refKontakt = React.createRef();
		return (
			<div className='app'>
				<Header scrollpoint={refKontakt} />
				<div className='main'>
					<Main />
				</div>
				<div id='onas'>
					<AboutUs
						lorem='O nas'
						bodylorem='4ITS specjalizuje się w outsourcingu technologicznym oraz rozwiązaniach informatycznych powstała na bazie długoletnich doświadczeń zespołu w obszarach działów IT, programowania oraz prowadzenia organizacji i projektów biznesowych.'
					/>
				</div>
				<div id='misja'>
					<AboutUs lorem='Jak działamy?' />
				</div>
				<div className='services'>
					<Service
						titlelorem='Szybki start'
						bodylorem='Natychmiastowe rozpoczęcie wsparcia po rozpoznaniu środowiska IT.'
						bitmap={
							'https://res.cloudinary.com/ohcash/image/upload/v1594493260/itconcierge/imgRocket.png'
						}
					/>
					<Service
						titlelorem='Wsparcie 24h'
						bodylorem='Obsługa zdalna i u klienta, stały monitoring IT.'
						bitmap={
							'https://res.cloudinary.com/ohcash/image/upload/v1594493262/itconcierge/imgTime.png'
						}
					/>
					<Service
						titlelorem='Kompleksowa obsługa'
						bodylorem='Helpdesk, sprzęt i oprogramowanie, sieć, bezpieczeństwo IT, rozwiązania chmurowe, prace programistyczne.'
						bitmap={
							'https://res.cloudinary.com/ohcash/image/upload/v1594493266/itconcierge/imgComprehensive.png'
						}
					/>
				</div>
				<div className='offerbox'>
					<div className='offerAboutUs' id='uslugi'>
						{/* <div id='uslugi'>
							<AboutUs lorem='Zakres usług' color='white' />
						</div> */}
						<Offer
							alignimage='left'
							offertitle='24/7 Helpdesk'
							offertext1='Jeden punkt kontaktu.n>Zarządzanie siecią komputerową.n>Monitorowanie ciągłości działania systemów.n>Doradztwo w tworzeniu infrastruktury IT.'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1594670537/itconcierge/imgHelpdesk1.png'
						/>
						<Offer
							offertitle='Rozwiązania antykryzysowe'
							offertext1='Narzędzia do pracy grupowej i aplikacji do wymiany plików.n>Dostosowanie kluczowych aplikacji do pracy zdalnej.n>Prowadzenie zdalnego helpdesku dla pracowników.n>Przyśpieszenie działania sieci komputerowej.'
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
					<AboutUs
						lorem='Skontaktuj się z nami'
						bodylorem='+ 48 736 861 191'
						classOption='phoneNumber'
					/>
				</div>
				<Form />
				<Footer />
			</div>
		);
	}
}

export default App;
