import React from 'react';
import {Box, Typography} from '@mui/material';
import Colors from '../../config/colors';
import {SecondaryButton} from '../../components/Buttons/Buttons.component';
import {useTranslation} from 'react-i18next';
import worqRoutes from '../../config/routes';

const Error = () => {
	const {t} = useTranslation();
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '85vh',
				backgroundColor: Colors.purple
			}}
		>
			<Typography variant="h1" style={{ color: 'white', fontFamily: 'Avenir Black' }}>
				{t('errorPage.title')}
			</Typography>
			<Typography variant="h6" style={{ color: 'white',  fontFamily: 'Poppins Medium'  }}>
				{t('errorPage.description')}
			</Typography>
			<SecondaryButton variant="contained" href={worqRoutes.home}>{t('errorPage.button.title')}</SecondaryButton>
		</Box>
	);
};

export default Error;
