import React from 'react';

class Searchbar extends React.Component {
	state = { searchTerm: '' };

	onInputChange = () => {};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form">
					<div className="field">
						<label>Product Search</label>
						<input
							type="text"
							value={this.state.searchTerm}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Searchbar;
