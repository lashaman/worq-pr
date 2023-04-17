import React from 'react';
import LogoMain from '../assets/icons/logo-main.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {HeaderAppBar, HeaderBox, HeaderButton, HeaderContainer, HeaderToolbar} from './custom-components';
import {MainButton} from './common-button.component';
const pages = ['Products', 'Services', 'Solutions', 'About us'];


const Header = () => {
	return (
		<HeaderAppBar >
			<HeaderContainer>
				<HeaderToolbar disableGutters>
					<img src={LogoMain} alt="LOGO" />
					<HeaderBox>
						{pages.map((page) => (
							<HeaderButton
								key={page}
								endIcon={<KeyboardArrowDownIcon />}>
								{page}
							</HeaderButton>
						))}
					</HeaderBox>
					<MainButton>Book a Demo</MainButton>
				</HeaderToolbar>
			</HeaderContainer>
		</HeaderAppBar>
	);
};

export default Header;

