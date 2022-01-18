import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App.jsx';
import bookReducer from './reducers/book';

const rootReducer = combineReducers({
    book: bookReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);

export default (props) => (
    <Provider store={store} >
        <App {...props} />
    </Provider>
)