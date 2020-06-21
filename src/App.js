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
					<AboutUs lorem='Misja, wizja, wartości' />
				</div>
				<div className='services'>
					<Service bodylorem='Odciążamy swoich klientów: zarządzających i ich działy i organizacje od planowania, nadzorowania i egzekucji funkcji IT aby pozwolić im na skoncentrowanie się na prowadzeniu biznesu.' />
					<Service bodylorem='Nasi klienci otrzymują nowoczesne, efektywne, o ‘wartości dodanej’ rozwiązania dzięki którym ich praca staje się łatwiejsza.' />
					<Service bodylorem='Wartości którymi się kierujemy to uczciwość, prawość, profesjonalizm, poszanowanie pracowników i współpracowników Klienta, swoich i dostawców, wywieranie pozytywnego wpływu na otoczenie, efektywne zarządzanie.' />
				</div>
				<div className='offerbox'>
					<div className='offerAboutUs'>
						<div id='uslugi'>
							<AboutUs lorem='Zakres usług' color='white' />
						</div>
						<Offer
							alignimage='left'
							offertitle='IT Outsourcing'
							offertext1='Helpdesk - wsparcie użytkownika.n>Administracja serwerów.n>Zarządzanie siecią komputerową.n>Monitorowanie ciągłości działania systemów informatycznych.n>Doradztwo w tworzeniu infrastruktury IT.'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1592737835/itconcierge/concImg3.png'
						/>
						<Offer
							offertitle='Rozwiązania antykryzysowe'
							offertext1='Narzędzia do pracy grupowej i aplikacji do wymiany plików.n>Dostosowanie kluczowych aplikacji do pracy zdalnej.n>Prowadzenie zdalnego helpdesku dla pracowników.n>Przyśpieszenie działanie sieci komputerowej.'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1592737838/itconcierge/concImg2.png'
						/>
						<Offer
							alignimage='left'
							offertitle='Bezpieczeństwo'
							offertext1='Zapewnienie kompleksowego bezpieczeństwa danych firmy.n>Testy bezpieczeństwa sieci i wprowadzanie zabezpieczeń.n>Stworzenie rozwiązania wysokiej dostępności.n>Opracowanie i wdrożenie polityki backupu.n>Migracja usług lokalnych do chmury.'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1592738048/itconcierge/concImg1.png'
						/>
					</div>
				</div>
				<div id='kontakt' ref={refKontakt}>
					<AboutUs lorem='Skontaktuj się z nami' bodylorem='Pytania, Komentarze, Problemy?' />
				</div>
				<Form />
				<Footer />
			</div>
		);
	}
}

export default App;
