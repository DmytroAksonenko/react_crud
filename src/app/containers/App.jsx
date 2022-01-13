import React, {Component} from "react";
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
/*import {
    fetchBook,
} from '../actions/book';
*/
import HomePage from 'pageProviders/Home';
import EditorPage from 'pageProviders/Editor';
import * as PAGES from 'constants/pages';

const testFunc = () => {
	console.log("test msg");
};

const App = () => {
	const [state, setState] = useState({
		componentDidMount: true,
	});

	// const dispatch = useDispatch();
	//
	// useEffect(() => {
	// 	dispatch(fetchBook());
	// 	setState(prevState => ({
	// 		...prevState,
	// 		componentDidMount: true,
	// 	}));
	// }, []);
	console.log("test");
	return (
		<BrowserRouter>
			<div>Header</div>
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
	);
};


export default App;