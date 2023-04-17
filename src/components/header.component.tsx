import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import LogoMain from '../assets/icons/logo-main.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {DemoButton, HeaderAppBar, HeaderBox, HeaderButton, HeaderContainer, HeaderToolbar} from './custom-components';
const pages = ['Products', 'Services', 'Solutions', 'About us'];


const Header = () => {
	return (
		<HeaderAppBar >
			<HeaderContainer>
				<HeaderToolbar disableGutters>
					<img src={LogoMain} />
					<HeaderBox>
						{pages.map((page) => (
							<HeaderButton
								key={page}
								endIcon={<KeyboardArrowDownIcon />}>
								{page}
							</HeaderButton>
						))}
					</HeaderBox>
					<DemoButton>Book a Demo</DemoButton>
				</HeaderToolbar>
			</HeaderContainer>
		</HeaderAppBar>
	);
};

export default Header;

