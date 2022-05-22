import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { characters } from '../characters';
import Shippuden from '../img/naruto-shippuden.png';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

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
		const { characters, searchfield } = this.state;
		const filteredCharacters = characters.filter((character) => {
			return character.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !characters.length ? (
			<h1 className='tc'>Loading...</h1>
		) : (
			<div className='tc'>
				<img src={Shippuden} alt='' weight='200' height='103' />
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList characters={filteredCharacters} />
					</ErrorBoundry>
					<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
						<p>
							Ⓒ 2022 - Naruto Anime Characters - Build with React by Daniel
							Daréus of Santa Barbara Production
						</p>
					</div>
				</Scroll>
			</div>
		);
	}
}

export default App;
