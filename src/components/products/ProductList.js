import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { selectProduct } from '../../actions';
import { getProducts } from '../../actions';
import Image from '../image/Image';

class ProductList extends Component {
	componentDidMount() {
		this.props.getProducts(); // call action creator to get list of products

		//TODO: call action creator to get list of images
	}

	renderList() {
		return this.props.products.map((product) => {
			return (
				<div className="item" key={product.id}>
					<div className="content">
						<div className="description">
							<h2>{product.name}</h2>
							<p>{product.description}</p>
							<Image productId={product.id} />
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

// anytime we need to get data from the redux store
// to the component
const mapStateToProps = (state) => {
	console.log(state);

	return { products: state.products };
};

export default connect(
	mapStateToProps,
	{
		//selectProduct: selectProduct,
		getProducts: getProducts
	}
)(ProductList);
