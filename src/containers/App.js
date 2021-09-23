import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { characters } from '../characters';
import Shippuden from '../img/naruto-shippuden.png';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			characters: [],
			searchfield: '',
		};
	}

	componentDidMount() {
		this.setState({ characters: characters });
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const {characters, searchfield} = this.state
		const filteredCharacters = characters.filter((character) => {
			return character.name
				.toLowerCase()
				.includes(searchfield.toLowerCase());
		});
		return !characters.length ? 
			<h1 className='tc'>Loading...</h1> :
			(
				<div className='tc'>
					<img src={Shippuden} alt='' weight='200' height='103' />
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList characters={filteredCharacters} />
					</Scroll>
				</div>
			);
		}
	}

export default App;
