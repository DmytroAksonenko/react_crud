import Button from '@material-ui/core/Button';
import AddCircleIcon from '../Icon/AddCircle';
import React from "react";

const NewBookButton = () => {
	return (
		<Button
			// style={{margin: ['25%'], display: "flex",}}
			variant="outlined"
			endIcon={<AddCircleIcon color="black" size={24} />}
		>
			ADD NEW
		</Button>
	)
};


export default NewBookButton;