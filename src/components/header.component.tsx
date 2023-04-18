import React from 'react';
import LogoMain from '../assets/icons/logo-main.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
	CustomContainer,
	HeaderAppBar,
	HeaderBox,
	HeaderButton,
	HeaderToolbar
} from '../atoms/custom-components';
import {MainButton} from '../atoms/common-button.component';
import {useTranslation} from 'react-i18next';
const pages = ['header.menu.item1', 'header.menu.item2', 'header.menu.item3', 'header.menu.item4'];


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

