import {
	getJson,
	postJson,
} from 'requests';

import config from 'config';

import {
	ERROR_RECEIVE_BOOK,
	RECEIVE_BOOK,
	REQUEST_BOOK,
} from '../constants/actionTypes';

const errorReceiveBook = () => ({
	type: ERROR_RECEIVE_BOOK,
});

const getBook = ({
	id,
}) => {
	const {
		BASE_URL,
		BOOKS_SERVICE,
	} = config;

	return getJson({
		url: `${BASE_URL}${BOOKS_SERVICE}/${id}`,
	}).catch(() => {
		const storage = {

			id: null,
			name: 'error',
			author: '',
			genre: '',
			price: '',

		};
		return storage;
	});
};

const receiveBook = (book) => ({
	type: RECEIVE_BOOK,
	payload: book,
});

const requestBook = () => ({
	type: REQUEST_BOOK,
});

export const fetchBook = ({
	id,
}) => (dispatch) => {
	dispatch(requestBook());
	return getBook({
		id,
	}).then(book => dispatch(receiveBook(book)))
		.catch(() => dispatch(errorReceiveBook()));
};

export default {
	fetchBook,
};
