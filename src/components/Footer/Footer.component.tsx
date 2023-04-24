import React from 'react';
import {
	Box,
	Typography,
	Link,
	IconButton,
	List,
	ListItem,
	Grid, styled,
} from '@mui/material';
import { Twitter, Instagram, FacebookRounded} from '@mui/icons-material';
import {MainButton} from '../Buttons/Buttons.component';
import {useTranslation} from 'react-i18next';
import Colors from '../../config/colors';
import {FatPhone} from '../JsxIcons/JsxIcons.component';
import Button from '@mui/material/Button';
import LogoFooter from '../../assets/images/logo-footer.svg';
import Container from '@mui/material/Container';

const FooterContainer = styled(Container)`
	@media (min-width: 600px) {
		padding-left: 0;
		padding-right: 0;
  }
`;

const CopyRightBox = styled(Box)`
  width: 100%;
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



const Footer = () => {
	const {t} = useTranslation();
	const contactUsSection = {
		title: t('footer.contactUs.follow.title'),
		phone: '02 - 6103 - 0976',
		email: 'contact@worq.com.au'
	};
	const FooterColumns = {
		services: {
			title: 'Services',
			items: [
				'Audits',
				'Compliance & Regulation',
				'Assessments',
				'SOP’s & Work Instructions',
				'System Builds',
				'Quality & Inspection Test Plans',
				'Business Workflows',
			],
		},
		product: {
			title: 'Product',
			items: [
				'Working',
				'Tracking',
				'Learning',
				'Registers',
				'Templates',
				'Security',
				'Integrations',
			],
		},
		about: {
			title: 'About',
			items: [
				'Company',
				'Services',
				'News',
			],
		},
	};

	return (
		<FooterContainer maxWidth={false}>
			<Box
				sx={{
					py: 3,
					color: 'black',
					maxWidth: {sm: '600px', md: '924px', lg: '1280px'},
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					height: {md: '444px', lg: '580px'},
					margin: '0 auto',
				}}
			>
				<Grid container spacing={2} columns={18} justifyContent="center">
					<Grid item xs={6} spacing={2}>
						<Box component="img" src={LogoFooter} alt="Logo" sx={{borderBottom: `1px solid ${Colors.purple}`, paddingBottom: '1.25em'}}/>
						<SocialBox mt={1}>
							<FollowUsTitle variant="subtitle1"  sx={{md: '18px', lg: '20px'}}>
								{contactUsSection.title}
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
								{contactUsSection.email}
							</Typography>
							<PhoneButton startIcon={<FatPhone />} sx={{md: '20px', lg: '22px'}}>{contactUsSection.phone}</PhoneButton>
						</Box>
						<Box mt={1}>
							<MainButton>{t('bookDemo.title')}</MainButton>
						</Box>
					</Grid>
					<Grid item xs={6} >
						<Typography variant="h6" fontWeight="bold" sx={{fontSize: {md: '18px', lg: '20px'}, fontFamily: 'Poppins Bold'}}>
							{FooterColumns.services.title}
						</Typography>
						<List>
							{FooterColumns.services.items.map((item, i) => (
								<ListItem key={i} disableGutters>
									<Link href="src/features#" color="inherit" underline="hover">
										<Typography variant="subtitle1" sx={{fontSize: {md: '16px', lg: '18px', fontFamily: 'Poppins Light'}}}  >{item}</Typography>
									</Link>
								</ListItem>
							))}
						</List>
					</Grid>
					<Grid item xs={3} >
						<Typography variant="h6" fontWeight="bold" sx={{fontSize: {md: '18px', lg: '20px'}, fontFamily: 'Poppins Bold'}}>
							{FooterColumns.product.title}
						</Typography>
						<List>
							{FooterColumns.product.items.map((item, i) => (
								<ListItem key={i} disableGutters>
									<Link href="src/features#" color="inherit" underline="hover">
										<Typography variant="subtitle1" fontSize="1.13rem" sx={{fontSize: {md: '16px', lg: '18px'}, fontFamily: 'Poppins Light'}} >{item}</Typography>
									</Link>
								</ListItem>
							))}
						</List>
					</Grid>
					<Grid item xs={3} >
						<Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
							<Typography variant="h6" fontWeight="bold" sx={{paddingRight: '1.3rem', fontSize: {md: '18px', lg: '20px'}, fontFamily: 'Poppins Bold'}} >
								{FooterColumns.about.title}
							</Typography>
						</Box>
						<Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
							<List>
								{FooterColumns.about.items.map((item, i) => (
									<ListItem key={i} disableGutters>
										<Link href="src/features#" color="inherit" underline="hover">
											<Typography variant="subtitle1" fontSize="1.13rem"  sx={{fontSize: {md: '16px', lg: '18px'},  fontFamily: 'Poppins Light'}} >{item}</Typography>
										</Link>
									</ListItem>
								))}
							</List>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<CopyRightBox sx={{height: {md: '60px', lg: '80px'}}}>
				<Grid container >
					<Grid item xs={4}>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6" fontSize="16px" fontFamily="Poppins Medium" color={Colors.white} textAlign="center">
					© 2021 Worq Pty Ltd. All rights reserved.
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h6" fontSize="14px" fontFamily="Poppins Medium" sx={{textTransform: 'underline' }} color={Colors.white} textAlign="center">
					Privacy Policy
						</Typography>
					</Grid>
				</Grid>
			</CopyRightBox>
		</FooterContainer>
	);
};

export default Footer;