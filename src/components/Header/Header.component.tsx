import React, {useState} from 'react';
import LogoMain from '../../assets/icons/logo-main.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
	CustomContainer
} from '../CustomMaterialComponents/CustomMaterial.component';
import {MainButton} from '../Buttons/Buttons.component';
import {useTranslation} from 'react-i18next';
import {
	Drawer, IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	styled,
} from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import {MenuList} from '../../interfaces/menu-list.interface';
import Colors from '../../config/colors';
import worqRoutes from '../../config/routes';


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
`;

const MenuIcon = () => (
	<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 2L2 2" stroke="#2D2B30" strokeWidth="3" strokeLinecap="round"/>
		<path d="M22.0001 11L9.77783 11" stroke="#2D2B30" strokeWidth="3" strokeLinecap="round"/>
		<path d="M22.0001 20L17.5557 20" stroke="#2D2B30" strokeWidth="3" strokeLinecap="round"/>
	</svg>
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface HeaderProps {
	menuList: MenuList[];
}

const Header = ({menuList}: HeaderProps) => {
	const { t } = useTranslation();
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{menuList.map((menuItem, index) => (
					<ListItem key={menuItem.key + index} >
						<ListItemButton href={menuItem.route}>
							<ListItemText primary={t(menuItem.key)} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event &&
					event.type === 'keydown' &&
					((event as React.KeyboardEvent).key === 'Tab' ||
						(event as React.KeyboardEvent).key === 'Shift')
				) {
					return;
				}

				setState({ ...state, [anchor]: open });
			};

	return (
		<HeaderAppBar sx={{height: {xs: '90px', md: '100px'}}}>
			<CustomContainer>
				<HeaderToolbar disableGutters sx={{justifyContent: {xs: 'space-between', md: 'center'}}}>
					<Button href={worqRoutes.home} sx={{padding: '0'}}>
						<Box component="img" src={LogoMain} alt="LOGO" sx={{
							width: { xs: '149.7px', lg: '199.61px'}
						}} />
					</Button>
					<HeaderBox sx={{ display: { xs: 'none', md: 'block' } }}>
						{menuList.map((menuItem) => (
							<HeaderButton
								key={menuItem.key}
								endIcon={<KeyboardArrowDownIcon />}
								href={menuItem.route}
								sx={{
									fontSize: {xs: '15px', sm: '16px', lg: '18px'},
									paddingLeft: {xs: '10px', lg: '25px'},
									paddingRight: {xs: '10px', lg: '25px'},
								}}
							>
								{t(menuItem.key)}
							</HeaderButton>
						))}
					</HeaderBox>
					<MainButton  sx={{ display: { xs: 'none', md: 'block' } }} >{t('bookDemo.short')}</MainButton>
					<IconButton  sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer('right', true)}><MenuIcon/></IconButton>
					<Drawer
						sx={{ display: { xs: 'block', md: 'none' } }}
						anchor={'right'}
						open={state['right']}
						onClose={toggleDrawer('right', false)}
					>
						{list('right')}
					</Drawer>
				</HeaderToolbar>
			</CustomContainer>
		</HeaderAppBar>
	);
};

export default Header;

