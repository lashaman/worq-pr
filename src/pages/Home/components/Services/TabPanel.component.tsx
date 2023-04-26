import React from 'react';
import {Box, Fade} from '@mui/material';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Fade in={value === index}>
					<Box sx={{ p: 3 , transition: 'all 0.4s ease-in-out'}}>
						{children}
					</Box>
				</Fade>
			)}
		</div>
	);
};

export default TabPanel;
