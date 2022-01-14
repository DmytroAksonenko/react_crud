import React, {Component} from "react";
import {useState} from 'react';
import {Button} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {BrowserRouter as Router, Link} from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
					<Button
						style={{margin: ['25%'], display: "flex",}}
						variant="outlined"
						endIcon={<AddCircleIcon/>}
					>
						ADD NEW
					</Button>
				<div>
					<PopupState variant="popover" popupId="popup-menu">
						{(popupState) => (
							<React.Fragment>
								<Button
									variant="contained" {...bindTrigger(popupState)}
									onMouseOver={popupState.open}>
									BOOK FROM DB
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
				</div>
			</div>
		);
	}
}

export default Home;