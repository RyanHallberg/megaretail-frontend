import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {
	render() {
		return <div>ProductDetails</div>;
	}
}

const mapStateToProps = (state) => {
	return { product: state.selectedProduct };
};
export default connect(mapStateToProps)(Product);
