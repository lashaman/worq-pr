import {styled} from '@mui/material';
import Button from '@mui/material/Button';
import Colors from '../../config/colors';


export const MainButton = styled(Button)`
	background-color: ${Colors.purple};
	color: ${Colors.purpleLighter};
	border-radius: 9999px;
	font-family: 'Avenir black';
  text-transform: none;
	padding: 12px 40px;
	&:hover, &:focus, &:active {
    background-color: ${Colors.purple};
    color: ${Colors.purpleLighter};
		opacity: 0.8;
	},
	@media (min-width: 900px) {
		font-size: 16px;
	},
	@media (min-width: 1200px) {
		font-size: 18px;
	}
`;

export const SecondaryButton = styled(Button)`
	background-color: ${Colors.purpleLighter};
	color: ${Colors.purple};
	border-radius: 9999px;
	padding: 12px 40px;
  font-family: 'Avenir black';
  text-transform: none;
	&:hover, &:focus, &:active {	
		background-color: ${Colors.purpleLighter};
    color: ${Colors.purple};
		opacity: 0.8;
	},
	@media (min-width: 900px) {
		font-size: 16px;
	},
	@media (min-width: 1200px) {
		font-size: 18px;
	}
`;

