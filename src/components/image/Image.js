import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductImage } from '../../actions';

class Image extends Component {
	componentDidMount() {
		this.props.getProductImage(this.props.productId);
	}

	render() {
		const imgSource = `http://localhost:8080/megaretail/resources/images/image/${
			this.props.productId
		}`;
		return <img alt="Product" src={imgSource} height="500" width="500" />;
	}
}

// const mapStateToProps = (state) => {
// 	return { deez: state.image };
// };

export default connect(
	null,
	{ getProductImage }
)(Image);
