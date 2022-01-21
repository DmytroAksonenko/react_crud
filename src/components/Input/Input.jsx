import React from "react";
import Input from '@mui/material/Input';

const NewInput = ({
	defaultValue,
}) => {

	return (
		<Input
			defaultValue={defaultValue}
			style={{width: '290px'}}
		/>
	)
};


export default NewInput;