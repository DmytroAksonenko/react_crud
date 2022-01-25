import React from 'react';
// import { bindActionCreators } from 'redux';
// import importedBookActions from '../actions/book';
// import { connect } from 'react-redux';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Header from 'components/Header';
import HomePage from 'pageProviders/Home';
import EditorPage from 'pageProviders/Editor';
import * as PAGES from 'constants/pages';

class App extends React.Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<BrowserRouter>
					<Header/>
					<Switch>
						<Route
							component={HomePage}
							path={`/${PAGES.HOME}`}
						/>
						<Route
							component={EditorPage}
							path={`/${PAGES.EDITOR}/:bookId`}
						/>
						<Redirect from="*" to={`/${PAGES.HOME}`}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

// const mapReduxStateToProps = state => ({
// 	author: state.book.author,
// 	name: state.book.name,
// 	isFailedFetchBook: state.book.isFailedFetchBook,
// 	isFetchingBook: state.book.isFetchingBook,
// });
//
// const mapDispatchToProps = (dispatch) => {
// 	const {
// 		fetchBook,
// 	} = bindActionCreators(importedBookActions, dispatch);
// 	return {
// 		actionFetchBook: fetchBook,
// 	};
// };

// export default connect(mapReduxStateToProps, mapDispatchToProps)(App);
export default App;
