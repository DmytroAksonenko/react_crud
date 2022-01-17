import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './containers/OldReactApp.jsx';
import bookReducer from './reducers/book';

const rootReducer = combineReducers({
    book: bookReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);

export default () => (
    <Provider store={store} >
        <App />
    </Provider>
)