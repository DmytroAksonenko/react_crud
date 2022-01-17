import React from 'react';
import { bindActionCreators } from 'redux';
import importedBookActions from '../actions/book';
import { connect } from 'react-redux';

class OldReactApp extends React.Component {
	componentDidMount() {

		// console.log(Object.keys(this.props));
		// console.log(Object.values(this.props));
		// console.log(Object.entries(this.props));
		this.props.actionFetchBook();
	}


	render() {
		console.log(this.props);
		return (
			<div>
				text
			</div>
		);
	}
}

const mapReduxStateToProps = state => ({
	author: state.book.author,
	// author: state.book.bookItem.author,
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(OldReactApp);