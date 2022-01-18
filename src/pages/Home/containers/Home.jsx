import React from "react";
import {Button} from '@mui/material';
import NewBookButton from 'components/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import importedBooksActions from "../actions/books";
import {connect} from "react-redux";

// import getClasses from 'components/Header';

class Home extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.actionFetchBooks();
	}



	render() {
		// const classes = getClasses();

		return (

			<div>
				<div>
					<NewBookButton/>
				</div>
				<div>
					{/*<div className={classes.container}>*/}
					{this.props.list.map((item) => {
						return <PopupState variant="popover" popupId="popup-menu">
							{(popupState) => (
								<React.Fragment>
									<Button
										variant="outlined" {...bindTrigger(popupState)}
										onMouseOver={popupState.open}
										// onMouseOut={popupState.close}
									>
										<div>
											<div>
												<ol style={{
													color: 'black', fontStyle: 'italic', background: '#008080',
													textAlign: 'center', alignItems: 'center'
												}}>{item.name}</ol>
											</div>
											<div>
												{'Author: ' + item.author}
											</div>
											<div>
												{'Genre: ' + item.genre}
											</div>
											<div>
												{'Price: ' + item.price}
											</div>
										</div>
									</Button>
									<Menu {...bindMenu(popupState)}>
										<MenuItem onClick={popupState.close}>
											<Link to="/editor">UPDATE</Link>
										</MenuItem>
										<MenuItem onClick={popupState.close}>DELETE</MenuItem>
									</Menu>
								</React.Fragment>
							)}
						</PopupState>
					})}
				</div>
			</div>
		);
	}
}

const mapReduxStateToProps = state => ({
	list: state.reducer.list,
	isFailedFetchBooks: state.reducer.isFailedFetchBooks,
	isFetchingBooks: state.reducer.isFetchingBooks,
});

const mapDispatchToProps = (dispatch) => {
	const {
		fetchBooks,
	} = bindActionCreators(importedBooksActions, dispatch);
	return {
		actionFetchBooks: fetchBooks,
	};
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Home);