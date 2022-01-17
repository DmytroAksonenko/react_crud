import {Button} from '@mui/material';
import AddCircleIcon from "../../pages/Home/containers/Home";
import React from "react";

const NewBookButton = () => {
	return (
		<Button
			// style={{margin: ['25%'], display: "flex",}}
			variant="outlined"
			// endIcon={<AddCircleIcon/>}
		>
			ADD NEW
		</Button>
	)
};


export default NewBookButton;