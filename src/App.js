import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Service from './components/Service/Service';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Header />
				<div className='main'>
					<Main />
				</div>
				<div className='services'>
					<Service />
					<Service />
					<Service />
				</div>
			</div>
		);
	}
}

export default App;
