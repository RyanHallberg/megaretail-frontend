// action Creator
import productUrl from '../apis/productUrl';

export const searchTerm = (word) => {
	return (dispatch) => {
		dispatch({
			type: 'TYPING',
			payload: word
		});
	};
};
// axios call to get the products from the database
export const getProducts = () => {
	return async (dispatch) => {
		const response = await productUrl.get('products');

		dispatch({
			type: 'GET_PRODUCTS',
			payload: response.data
		});
	};
};

// get the product image
export const getProductImage = (id) => {
	return async (dispatch) => {
		const response = await productUrl.get(`images/image/${id}`);

		dispatch({
			type: 'GET_IMAGE',
			payload: response.data
		});
	};
};
export const selectProduct = (product) => {
	// return an action
	return {
		type: 'SELECTED_PRODUCT',
		payload: product
	};
};
