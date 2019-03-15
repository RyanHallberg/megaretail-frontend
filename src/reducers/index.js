import { combineReducers } from 'redux';

// reducers
// a list of products fetched from API
const searchBarReducer = (state = [], action) => {
	switch (action.type) {
		case 'TYPING':
			return action.payload;

		default:
			return state;
	}
};
const productsReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return action.payload;

		default:
			return state;
	}
};

const imageReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_IMAGE':
			return action.payload;

		default:
			return state;
	}
};

// a specific product
const selectedProductReducer = (selectedProduct = null, action) => {
	if (action.type === 'PRODUCT_SELECTED') {
		return action.payload;
	}

	return selectedProduct;
};

export default combineReducers({
	products: productsReducer,
	selectedProduct: selectedProductReducer,
	image: imageReducer,
	searchBar: searchBarReducer
});
