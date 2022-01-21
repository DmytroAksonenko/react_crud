import React from "react";
import {Button} from '@mui/material';
import NewBookButton from 'components/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Popper from '@material-ui/core/Popper';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import importedBooksActions from "../actions/books";
import {connect} from "react-redux";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookPopperAnchor: null,
			bookPopperItem: null,
			isMouseOverPopper: false,
			bookId: 0,
		};
	}

	componentDidMount() {
		this.props.actionFetchBooks();
	}

	render() {
		console.log(this.state);
		console.log(this.state.bookPopperItem);
		return (

			<div>
				<div>
					<NewBookButton/>
				</div>
				<div style={{
					display: 'flex',
				}}>
					{this.props.list.map((item) => (
						<div
							onMouseEnter={(event) => this.setState({
								bookPopperAnchor: event.currentTarget,
								bookPopperItem: item,
								isMouseOverPopper: true,
							})}
							onMouseLeave={() => {
								this.setState({
									isMouseOverPopper: false,
								});
								setTimeout(() => {
									if (!this.state.isMouseOverPopper) {
										this.setState({
											bookPopperAnchor: null,
											bookPopperItem: null,
											isMouseOverPopper: false,
										});
									}

								}, 200);
							}}
						>
							<Button variant="outlined">
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
						</div>
					))}
					<Popper
						anchorEl={this.state.bookPopperAnchor}
						open={this.state.bookPopperAnchor}
						onMouseEnter={() => this.setState({
							isMouseOverPopper: true,
						})}
						onMouseLeave={() => this.setState({
							isMouseOverPopper: false,
							bookPopperAnchor: null,
							bookPopperItem: null,
						})}
					>
						<Box sx={{border: 1, p: 1, bgcolor: '#008080'}}>
							<List>
								<ListItem>
									<Link
										to={{
											pathname: "/editor",
											search: "?bookId=23434",
										}}
									>
										UPDATE
									</Link>
								</ListItem>
								<ListItem
									onClick={() => this.setState({
										bookPopperAnchor: null,
										bookPopperItem: null,
									})}
								>
									DELETE
								</ListItem>
							</List>
						</Box>
					</Popper>

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