import React from "react";
import Input from '../../../components/Input';
import Button from "@material-ui/core/Button";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import importedBookActions from "../../Editor/actions/book";
import Box from '@material-ui/core/Box';

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

class Editor extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actionFetchBook();
		console.log(this.props);
		console.log('query req: ' + getQueryVariable('bookId'));
	}

	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'start', width: '100%', paddingTop: '100px'}}>
				<div>
					<Box sx={{border: 1, p: 1, background: 'white', width: '220px'}}>
						<div>
							<div>
								<Input defaultValue={"Name: " + this.props.name}/>
							</div>
							<div>
								<Input defaultValue={"Author: " + this.props.author}/>
							</div>
							<div>
								<Input defaultValue={"Genre: " + this.props.genre}/>
							</div>
							<div>
								<Input defaultValue={"Price: " + this.props.price}/>
							</div>
						</div>

					</Box>
					<div>
						<Button
							variant="outlined"
							style={{width: '300px', color: 'black', fontStyle: 'italic', borderColor: 'black'}}
						>
							UPDATE
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

const mapReduxStateToProps = state => ({
	name: state.reducer.name,
	author: state.reducer.author,
	genre: state.reducer.genre,
	price: state.reducer.price,
	isFailedFetchBook: state.reducer.isFailedFetchBook,
	isFetchingBook: state.reducer.isFetchingBook,
});

const mapDispatchToProps = (dispatch) => {
	const {
		fetchBook,
	} = bindActionCreators(importedBookActions, dispatch);
	return {
		actionFetchBook: fetchBook,
	};
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Editor);