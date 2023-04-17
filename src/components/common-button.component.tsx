import {styled} from '@mui/material';
import Button from '@mui/material/Button';


const buttonStyles = {
	main: {
		backgroundColor: '#3F25F2',
		color: '#EFEEFF',
	},
	secondary: {
		backgroundColor: '#EFEEFF',
		color: '#3F25F2',
	}
};

export const MainButton = styled(Button)({
	backgroundColor: buttonStyles.main.backgroundColor,
	color: buttonStyles.main.color,
	borderRadius: '9999px',
	padding: '12px 40px',
	fontSize: '17px',
	'&:hover, &:focus, &:active': {
		backgroundColor: buttonStyles.main.backgroundColor,
		color: buttonStyles.main.color,
		opacity: 0.8,
	},
});

export const SecondaryButton = styled(Button)({
	backgroundColor: buttonStyles.secondary.backgroundColor,
	color: buttonStyles.secondary.color,
	borderRadius: '9999px',
	padding: '12px 40px',
	fontSize: '17px',
	'&:hover, &:focus, &:active': {
		backgroundColor: buttonStyles.secondary.backgroundColor,
		color: buttonStyles.secondary.color,
		opacity: 0.8,
	},
});

