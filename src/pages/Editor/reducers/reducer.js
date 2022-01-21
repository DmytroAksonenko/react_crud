import {
	ERROR_RECEIVE_BOOK,
	RECEIVE_BOOK,
	REQUEST_BOOK,
} from '../constants/actionTypes';

const initialState = {
	// bookItem:{
	//     name: 'initial name',
	//     author: 'initial author',
	//     genre: '',
	//     price: 0,
	// },
	name: '',
	author: '',
	genre: '',
	price: 0,
	isFailedFetchBook: false,
	isFetchingBook: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ERROR_RECEIVE_BOOK: {
			return {
				...state,
				isFailedFetchBook: true,
				isFetchingBook: false,
			};
		}

		case RECEIVE_BOOK: {
			const {
				// bookItem,
				name,
				author,
				genre,
				price,
			} = action.payload;

			return {
				...state,
				// bookItem: bookItem || initialState.bookItem,
				name: name || initialState.name,
				author: author || initialState.author,
				genre: genre || initialState.genre,
				price: price || initialState.price,
				isFailedFetchBook: false,
				isFetchingBook: false,
			};
		}

		case REQUEST_BOOK: {
			return {
				...state,
				isFailedFetchBook: false,
				isFetchingBook: true,
			};
		}

		default: return state;
	}
}