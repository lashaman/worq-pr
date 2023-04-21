import React from 'react';
import LogoMain from '../assets/icons/logo-main.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
	CustomContainer
} from '../atoms/custom-components';
import {MainButton} from '../atoms/common-button.component';
import {useTranslation} from 'react-i18next';
import {styled} from '@mui/material';
import Button from '@mui/material/Button';
import Colors from '../config/colors';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
const pages = ['header.menu.item1', 'header.menu.item2', 'header.menu.item3', 'header.menu.item4'];

export const HeaderButton = styled(Button)`
    color: ${Colors.black};
		padding-left: 25px;
		padding-right: 25px;
    font-size: 18px;
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

export const HeaderAppBar = styled(AppBar)`
	position: static;
	box-shadow: none;
	background-color: ${Colors.white};
  height: 100px;
	`;



const Header = () => {
	const { t } = useTranslation();
	return (
		<HeaderAppBar >
			<CustomContainer>
				<HeaderToolbar disableGutters>
					<img src={LogoMain} alt="LOGO" />
					<HeaderBox>
						{pages.map((page) => (
							<HeaderButton
								key={page}
								endIcon={<KeyboardArrowDownIcon />}>
								{t(page)}
							</HeaderButton>
						))}
					</HeaderBox>
					<MainButton>Book a Demo</MainButton>
				</HeaderToolbar>
			</CustomContainer>
		</HeaderAppBar>
	);
};

export default Header;

