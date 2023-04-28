import React from 'react';
import {styled, Typography} from '@mui/material';

const CardDescription = styled(Typography)`
	font-family: 'Avenir Heavy';
	font-size: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
`;

interface CardTitleProps {
	text: React.ReactNode;
}

const CardTitle = ({text}: CardTitleProps) => {
	return (
		<CardDescription variant="h6">{text}</CardDescription>
	);
};

export default CardTitle;
