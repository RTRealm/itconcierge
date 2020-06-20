import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import Service from './components/Service/Service';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Header />
				<div className='main'>
					<Main />
				</div>
				<AboutUs
					lorem='About Us'
					bodylorem='4ITS focuses on technology outsourcing and IT solutions. We leverage on the team decades long experience in the areas of IT departments, coding as well as running business organizations and projects.'
				/>
				<AboutUs lorem='Our Valuable Services' />
				<div className='services'>
					<Service />
					<Service />
					<Service />
				</div>
				<AboutUs lorem='Contact Us' bodylorem='Questions, Comments, Concerns?' />
			</div>
		);
	}
}

export default App;
