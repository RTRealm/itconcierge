import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Service/Service';
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
							offertitle='IT OUTSOURCING'
							offertext='Helpdesk -  wsparcie użytkowników'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg'
						/>
						<Offer
							offertitle='IT OUTSOURCING'
							offertext='Helpdesk -  wsparcie użytkowników'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg'
						/>
						<Offer
							alignimage='left'
							offertitle='IT OUTSOURCING'
							offertext='Helpdesk -  wsparcie użytkowników'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg'
						/>
					</div>
				</div>
				<div ref={refKontakt}>
					<AboutUs lorem='Skontaktuj się z nami' bodylorem='Pytania, Komentarze, Problemy?' />
				</div>
				<Form />
				<Footer />
			</div>
		);
	}
}

export default App;
