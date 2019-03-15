import React from 'react';
import { searchTerm } from '../../actions';
import { connect } from 'react-redux';

class Searchbar extends React.Component {
	//state = { searchTerm: '' };

	onInputChange = (event) => {
		// call action creator
		this.props.searchTerm(event.target.value);
		//this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form">
					<div className="field">
						<label>Product Search</label>
						<input
							type="text"
							//value={this.state.searchTerm}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { words: state.Searchbar };
};

export default connect(
	mapStateToProps,
	{
		searchTerm: searchTerm
	}
)(Searchbar);
