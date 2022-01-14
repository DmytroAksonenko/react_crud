import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const getClasses = makeStyles(() => ({
	container: {
		alignItems: 'center',
		display: 'flex',
		background: '#008080',
		height: '60px',
		'font-style': 'italic',
	},
}));


const Header = () => {
	const classes = getClasses();
	return (
		<div className={classes.container}>
			<h1>Library</h1>
			.UA
		</div>
	)
};

export default Header;