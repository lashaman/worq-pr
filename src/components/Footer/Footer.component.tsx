import React from 'react';
import {
	Box,
	Typography,
	IconButton,
	Grid, styled, useMediaQuery, Stack,
} from '@mui/material';
import { Twitter, Instagram, FacebookRounded} from '@mui/icons-material';
import {MainButton} from '../Buttons/Buttons.component';
import {useTranslation} from 'react-i18next';
import Colors from '../../config/colors';
import {FatPhone} from '../JsxIcons/JsxIcons.component';
import Button from '@mui/material/Button';
import LogoFooter from '../../assets/images/logo-footer.svg';
import Container from '@mui/material/Container';
import {FooterColumns} from '../../config/footer-columns';
import FooterList from './FooterList.component';
import FooterColumnsInterface from '../../interfaces/footer-columns.interface';

const FooterContainer = styled(Container)`
	@media (min-width: 0) {
		padding-left: 0;
		padding-right: 0;
  }
`;

const CopyRightBox = styled(Box)`
	background-color: ${Colors.purple};
	display: flex;
	align-items: center;
	justify-content: center;
`;


const PhoneButton = styled(Button)`
	font-weight: 900;
  font-size: 1.25rem;
  color: ${Colors.purple};
`;

const SocialBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	max-width: 100%;
`;

const FollowUsTitle = styled(Typography)`
	margin-top: 2px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

interface FooterProps {
	footerLists: FooterColumnsInterface;
}

const Footer = ({footerLists}: FooterProps) => {
	const {t} = useTranslation();
	const isScreenMobile= useMediaQuery('(max-width:900px)');

	return (
		<FooterContainer maxWidth={false}>
			<Box
				sx={{
					py: 3,
					color: 'black',
					maxWidth: {md: '924px', lg: '1280px'},
					paddingLeft: {xs: '16px', md: 0},
					paddingRight: {xs: '16px', md: 0},
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					height: {md: '444px', lg: '580px'},
					margin: '0 auto',
				}}
			>
				<Grid container spacing={2} columns={12} justifyContent="center">
					<Grid item xs={12} md={4} lg={3} >
						<Box>
							<Box component="img" src={LogoFooter} alt="Logo" sx={{borderBottom: `1px solid ${Colors.purple}`, paddingBottom: '1.25em'}}/>
							<SocialBox mt={1}>
								<FollowUsTitle variant="subtitle1"  sx={{md: '18px', lg: '20px'}}>
									{t(footerLists.contactUs.title)}
								</FollowUsTitle>
								<IconButton color="inherit">
									<FacebookRounded />
								</IconButton>
								<IconButton color="inherit">
									<Instagram />
								</IconButton>
								<IconButton color="inherit">
									<Twitter />
								</IconButton>
							</SocialBox>
							<Box mt={1}>
								<Typography variant="h6" fontSize="1.13rem" color={Colors.black} sx={{md: '16px', lg: '18px'}}>
									{t(footerLists.contactUs.email)}
								</Typography>
								<PhoneButton startIcon={<FatPhone />} sx={{md: '20px', lg: '22px'}}>{t(footerLists.contactUs.phone)}</PhoneButton>
							</Box>
							<Box mt={1}>
								<MainButton>{t('bookDemo.short')}</MainButton>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={8} lg={9} >
						<Stack direction={isScreenMobile ? 'column': 'row'} justifyContent="space-between" spacing={ {xs: null, md:2}} sx={{mb: {xs: 0, md:2}}}>
							<FooterList list={footerLists.services}/>
							<FooterList list={footerLists.product} isScreenMobile={isScreenMobile}/>
							<FooterList list={footerLists.about} isScreenMobile={isScreenMobile}/>
						</Stack>
					</Grid>
				</Grid>
			</Box>
			<CopyRightBox sx={{height: {md: '60px', lg: '80px'}}}>
				<Grid container>
					<Grid item xs={12} md={4}>
					</Grid>
					<Grid item xs={12}  md={4}>
						<Typography variant="h6" fontSize="16px" fontFamily="Poppins Medium" color={Colors.white} textAlign="center">
							{t('footer.copyright')}
						</Typography>
					</Grid>
					<Grid item xs={12}  md={4}>
						<Typography variant="h6" fontSize="14px" fontFamily="Poppins Medium" sx={{textTransform: 'underline' }} color={Colors.white} textAlign="center">
							{t('footer.privacyPolicy')}
						</Typography>
					</Grid>
				</Grid>
			</CopyRightBox>
		</FooterContainer>
	);
};

export default Footer;
