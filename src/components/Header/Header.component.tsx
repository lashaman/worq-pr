import React from 'react';
import LogoMain from '../../assets/icons/logo-main.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
	CustomContainer
} from '../CustomMaterialComponents/CustomMaterial.component';
import {MainButton} from '../Buttons/Buttons.component';
import {useTranslation} from 'react-i18next';
import {styled} from '@mui/material';
import Button from '@mui/material/Button';
import Colors from '../../config/colors';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
const pages = ['header.menu.item1', 'header.menu.item2', 'header.menu.item3', 'header.menu.item4'];

export const HeaderButton = styled(Button)`
	font-family: 'Avenir Heavy';
	text-transform: none;
  color: ${Colors.black};
`;

export const HeaderBox = styled(Box)`
	flex-grow: 1;
	display: flex;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	padding: 0.625rem;
`;

export const HeaderToolbar = styled(Toolbar)`
	height: 100%;
	padding: 0;
`;

export const HeaderAppBar = styled(AppBar)`
	position: static;
	box-shadow: none;
	background-color: ${Colors.white};
  height: 6.25rem;
`;




const Header = () => {
	const { t } = useTranslation();
	return (
		<HeaderAppBar >
			<CustomContainer>
				<HeaderToolbar disableGutters>
					<Box component="img" src={LogoMain} alt="LOGO" sx={{
						width: {xs: '99.8px', sm: '149.7px', lg: '199.61px'},
					}} />
					<HeaderBox>
						{pages.map((page) => (
							<HeaderButton
								key={page}
								endIcon={<KeyboardArrowDownIcon />}
								sx={{
									fontSize: {xs: '15px', sm: '16px', lg: '18px'},
									paddingLeft: {xs: '10px', lg: '25px'},
									paddingRight: {xs: '10px', lg: '25px'},
								}}
							>
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

