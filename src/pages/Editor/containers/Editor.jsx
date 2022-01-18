import React from "react";
import Input from '@mui/material/Input';
import {Button} from "@mui/material";
import {bindActionCreators} from "redux";
import importedBooksActions from "../../Home/actions/books";
import {connect} from "react-redux";

class Editor extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props)
	}

	render() {
		return (
			<div>
				<div>
					<div>
						<Input defaultValue="Name"/>
					</div>
					<div>
						<Input defaultValue="Author"/>
					</div>
					<div>
						<Input defaultValue="Genre"/>
					</div>
					<div>
						<Input defaultValue="Price"/>
					</div>
				</div>
				<div>
					<Button variant="outlined">
						UPDATE
					</Button>
				</div>
			</div>
		);
	}
}

const mapReduxStateToProps = state => ({
	list: state.reducer.list,
});

const mapDispatchToProps = (dispatch) => {
	const {
		fetchBooks,
	} = bindActionCreators(importedBooksActions, dispatch);
	return {
		actionFetchBooks: fetchBooks,
	};
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Editor);