import {
	getJson,
	postJson,
} from 'requests';

import config from 'config';

import {
	ERROR_RECEIVE_BOOKS,
	RECEIVE_BOOKS,
	REQUEST_BOOKS,
} from '../constants/actionTypes';

const errorReceiveBooks = () => ({
	type: ERROR_RECEIVE_BOOKS,
});

const getBooks = () => {
	const {
		BASE_URL,
		BOOKS_SERVICE,
	} = config;

	return getJson({
		url: `${BASE_URL}${BOOKS_SERVICE}/getAll`,
	}).catch(() => {
		const storage = {
			books: [
				{
					name: 'cool book',
					author: 'author1',
					genre: 'genre1',
					price: 50,
				},
				{
					name: 'Best book',
					author: 'author2',
					genre: 'genre1',
					price: 53,
				},
				{
					name: 'book3',
					author: 'author3',
					genre: 'genre2',
					price: 73,
				},
				{
					name: 'I Book',
					author: 'author4',
					genre: 'genre3',
					price: 23,
				},
			],
		};
		return storage;
	});
};

const receiveBooks = (books) => ({
	type: RECEIVE_BOOKS,
	payload: books,
});

const requestBooks = () => ({
	type: REQUEST_BOOKS,
});

export const fetchBooks = () => (dispatch) => {
	dispatch(requestBooks());
	return getBooks({
		dispatch,
	}).then(books => dispatch(receiveBooks(books)))
		.catch(() => dispatch(errorReceiveBooks()));
};

export default {
	fetchBooks,
};
