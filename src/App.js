import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Service/Service';
import Offer from './components/Offer/Offer';
import Form from './components/Form/Form';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Header />
				<div className='main'>
					<Main />
				</div>
				<AboutUs
					lorem='O nas'
					bodylorem='4ITS specjalizuje się w outsourcingu technologicznym oraz rozwiązaniach informatycznych powstała na bazie długoletnich doświadczeń zespołu w obszarach działów IT, programowania oraz prowadzenia organizacji i projektów biznesowych'
				/>
				<AboutUs lorem='Misja, wizja, wartości' />
				<div className='services'>
					<Service bodylorem='Odciążamy swoich klientów: zarządzających i ich działy i organizacje od planowania, nadzorowania i egzekucji funkcji IT aby pozwolić im na skoncentrowanie się na prowadzeniu biznesu.' />
					<Service bodylorem='Nasi klienci otrzymują nowoczesne, efektywne, o ‘wartości dodanej’ rozwiązania dzięki którym ich praca staje się łatwiejsza.' />
					<Service bodylorem='Wartości którymi się kierujemy to uczciwość, prawość, profesjonalizm, poszanowanie pracowników i współpracowników Klienta, swoich i dostawców, wywieranie pozytywnego wpływu na otoczenie, efektywne zarządzanie.' />
				</div>
				<div className='offerbox'>
					<div className='offerAboutUs'>
						<AboutUs lorem='Zakres usług' />
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
						<Offer
							offertitle='IT OUTSOURCING'
							offertext='Helpdesk -  wsparcie użytkowników'
							offerimage='https://res.cloudinary.com/ohcash/image/upload/v1547302800/photo-1534972195531-d756b9bfa9f2.jpg'
						/>
					</div>
				</div>
				<AboutUs lorem='Skontaktuj się z nami' bodylorem='Pytania, Komentarze, Problemy?' />
				<Form />
			</div>
		);
	}
}

export default App;
