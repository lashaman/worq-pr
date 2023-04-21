import {Box, styled} from '@mui/material';
import React from 'react';
import Colors from '../config/colors';

const CustomBox = styled(Box)`
  background-color: ${Colors.purpleLighter};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IconBoxProps {
	width: string;
	height: string;
	children: React.ReactNode;
}

const IconBox = ({width,height, ...props}: IconBoxProps) => {
	return <CustomBox sx={{width: width, height: height}} {...props}>{props.children}</CustomBox>;
};

export default IconBox;
