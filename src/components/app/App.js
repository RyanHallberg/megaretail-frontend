import React from 'react';
import Searchbar from '../searchbar/Searchbar';
import ProductList from '../products/ProductList';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Searchbar />
				<div className="ui container grid">
					<div className="ui container row">
						<ProductList />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
