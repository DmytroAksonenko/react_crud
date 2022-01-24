import {
	ERROR_RECEIVE_BOOKS,
	RECEIVE_BOOKS,
	REQUEST_BOOKS,
} from '../constants/actionTypes';

const initialState = {
	list: [],
	isFailedFetchBooks: false,
	isFetchingBooks: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ERROR_RECEIVE_BOOKS: {
			return {
				...state,
				isFailedFetchBooks: true,
				isFetchingBooks: false,
			};
		}

		case RECEIVE_BOOKS: {
			const list = action.payload;

			return {
				...state,
				list: list || initialState.list,
				isFailedFetchBooks: false,
				isFetchingBooks: false,
			};
		}

		case REQUEST_BOOKS: {
			return {
				...state,
				isFailedFetchBooks: false,
				isFetchingBooks: true,
			};
		}

		default: return state;
	}
}
