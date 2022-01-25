import {
	ERROR_RECEIVE_BOOK,
	RECEIVE_BOOK,
	REQUEST_BOOK,
	REQUEST_SAVE_BOOK,
	RECEIVE_RESULT_SAVE_BOOK,
	ERROR_RECEIVE_RESULT_SAVE_BOOK,
} from '../constants/actionTypes';

const initialState = {
	// id: null,
	// name: '',
	// author: '',
	// genre: '',
	// price: '',
	book: null,
	isFailedFetchBook: false,
	isFetchingBook: false,
	isFailedFetchSaveBook: false,
	isFetchingSaveBook: false,
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
				id,
				name,
				author,
				genre,
				price,
			} = action.payload;

			return {
				...state,
				book: {
					id,
					name,
					author,
					genre,
					price,
				},
				// id: id || initialState.id,
				// name: name || initialState.name,
				// author: author || initialState.author,
				// genre: genre || initialState.genre,
				// price: price || initialState.price,
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

		case ERROR_RECEIVE_RESULT_SAVE_BOOK: {
			return {
				...state,
				isFailedFetchSaveBook: true,
				isFetchingSaveBook: false,
			};
		}

		case RECEIVE_RESULT_SAVE_BOOK: {
			const {
				id,
				name,
				author,
				genre,
				price,
			} = action.payload;

			return {
				...state,
				id: id || initialState.id,
				name: name || initialState.name,
				author: author || initialState.author,
				genre: genre || initialState.genre,
				price: price || initialState.price,
				isFailedFetchSaveBook: false,
				isFetchingSaveBook: false,
			};
		}

		case REQUEST_SAVE_BOOK: {
			return {
				...state,
				isFailedFetchSaveBook: false,
				isFetchingSaveBook: true,
			};
		}

		default: return state;
	}
}
