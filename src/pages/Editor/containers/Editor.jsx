import React, {Component} from "react";
import Input from '@mui/material/Input';
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {makeStyles} from "@material-ui/core";

class Editor extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
					<div>
							<Input defaultValue="Name"/>
							<Input defaultValue="Author"/>
							<Input defaultValue="Genre"/>
							<Input defaultValue="Price"/>
					</div>
					<div>
							<Button	variant="outlined">
								UPDATE
							</Button				>
					</div>
			</div>
		);
	}
}

export default Editor;