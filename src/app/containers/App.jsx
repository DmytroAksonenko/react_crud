import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import {
    fetchBook,
} from '../actions/book';
import Header from 'components/Header';
import HomePage from 'pageProviders/Home';
import EditorPage from 'pageProviders/Editor';
import * as PAGES from 'constants/pages';
import importedBookActions from '../actions/book';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const App = (props) => {
	const [state, setState] = useState({
		componentDidMount: true,
	});


	// function sum(a) {
	// 	return function (b) {
	// 		return (a + b);
	// 	}
	// }
	//
	// console.log(sum(2)(3));

	console.log(props);

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchBook());
	// 	setState(prevState => ({
	// 		...prevState,
	// 		componentDidMount: true,
	// 	}));
	// }, []);

	return (
		<div>
			<div>
				{"!!!!!!!!!!!!!!!!!!!!!!" + props.author}
			</div>

		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path={`/${PAGES.HOME}`}>
					<HomePage/>
				</Route>
				<Route path={`/${PAGES.EDITOR}`}>
					<EditorPage/>
				</Route>
				<Redirect from="*" to={`/${PAGES.HOME}`}/>
			</Switch>
		</BrowserRouter>
		</div>
	);
};

const mapReduxStateToProps = state => ({
	author: state.book.bookItem.author,
	isFailedFetchBook: state.book.isFailedFetchBook,
	isFetchingBook: state.book.isFetchingBook,
});

const mapDispatchToProps = (dispatch) => {
	const {
		fetchBook,
	} = bindActionCreators(importedBookActions, dispatch);
	return {
		actionFetchBook: fetchBook,
	};
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(App);