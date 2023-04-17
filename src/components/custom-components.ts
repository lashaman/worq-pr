import {styled} from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export const HeaderButton = styled(Button)`
    color: #000000;
    font-size: 18px;
		`;

export const DemoButton = styled(Button)`
		background-color: #3F25F2;
		color: #ffffff;
		border-radius: 9999px;
		padding: 12px 40px;
		font-size: 17px;
	`;

export const HeaderBox = styled(Box)`
		flex-grow: 1;
		display: flex;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
  	padding: 10px ;
		`;

export const HeaderToolbar = styled(Toolbar)`
		height: 100%;
		padding: 0;
		`;

export const HeaderContainer = styled(Container)`
	width: 1280px;
	align-items: center;
	justify-content: center;
	height: 100%;
	@media (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
	@media (min-width: 1280px) {
  	max-width: 1280px;
	}
	`;

export const HeaderAppBar = styled(AppBar)`
	position: static;
	box-shadow: none;
	background-color: #ffffff;
  height: 100px;
	`;
