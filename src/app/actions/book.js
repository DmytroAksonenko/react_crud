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

const getBook = () => {
    const {
        BASE_URL,
        BOOKS_SERVICE,
    } = config;

    return getJson({
        url: `${BASE_URL}${BOOKS_SERVICE}/book/get`,
    }).catch(() => {
        const storage = {
            // 'bookItem': {
                name: 'book1',
                author: 'author1',
                genre: 'genre1',
                price: 50,
            // },
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

export const fetchBook = () => (dispatch) => {
    dispatch(requestBook());
    return getBook({
        dispatch,
    }).then(book => dispatch(receiveBook(book)))
        .catch(() => dispatch(errorReceiveBook()));
};

export default {
    fetchBook,
};