import {
    ERROR_RECEIVE_BOOK,
    RECEIVE_BOOK,
    REQUEST_BOOK,
} from '../constants/actionTypes';

const initialState = {
    name: '',
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
                name,
            } = action.payload;

            return {
                ...state,
                name: name || initialState.name,
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