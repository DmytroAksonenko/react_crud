import {
    getJson,
    postJson,
} from 'requests';

import config from 'config';

import {
    ERROR_RECEIVE_BOOK,
    RECEIVE_BOOK,
    REQUEST_BOOK,
} from 'constants/actionTypes';

const errorReceiveUser = () => ({
    type: ERROR_RECEIVE_BOOK,
});

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