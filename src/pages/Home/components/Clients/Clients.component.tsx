import React from 'react';
import {Box, Container, Divider, Grid, styled, Typography} from '@mui/material';
import {t} from 'i18next';
import Colors from '../../../../config/colors';
import Bastil from '../../../../assets/images/bastil.png';
import Boleir from '../../../../assets/images/boleir.png';
import Darkside from '../../../../assets/images/darkside.png';
import EdgeWater from '../../../../assets/images/edgewater.png';
import FifthFlour from '../../../../assets/images/fifthflour.png';

const ClientsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 67px 0;
  background: rgb(239, 238, 255);
  background: radial-gradient(circle, rgba(239, 238, 255, 1) 64%, rgba(148, 187, 233, 1) 100%, rgba(148, 187, 233, 1) 100%);
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const ServiceBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  align-items: center;
`;

const ServiceTitle = styled(Typography)`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	font-family: 'Avenir Black';
  color: ${Colors.purple};
  font-weight: 700;
`;

const ImgGrid = styled(Grid)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;


const clients = [
	Boleir,
	EdgeWater,
	Bastil,
	FifthFlour,
	Darkside
];

const clientsXs = [
	EdgeWater,
	Bastil,
	FifthFlour,
];

const Clients = () => {
	return (
		<ClientsContainer maxWidth={false}>
			<ServiceBox sx={{
				padding: {xs: '40px 0 40px 0', md: '30px 0 30px 0', lg: '80px 0 80px 0'},
			}}>
				<Grid container  spacing={{xs: '1', md: '4'}} sx={{width: 'fit-content'}}>
					<Grid xs={12} md={3} lg={4}>
						<ServiceTitle variant="h3" sx={{
							fontSize: {xs: '28px', md: '30px' , lg: '48px'},
							padding: {xs: '0 0 20px 0', md: '0 0 0 0'},
							textAlign: {xs: 'center', md: 'left'},
							borderRight: {xs: 'none', md: `2px solid ${Colors.purple}`},
						}}>
							{t('clients.title')}
						</ServiceTitle>
					</Grid>
					<Divider orientation="horizontal" variant="middle" sx={{ width: '25%', margin: '0 auto', display: {xs: 'flex', md: 'none'}}} flexItem />
					<ImgGrid  md={9} lg={8} sx={{display: {xs: 'none', md: 'flex'}, paddingLeft: {md: '20px'}}} justifyContent="space-between">
						{clients.map((client) => (
							<Box component="img" src={client} key={client} alt="client" sx={{
								width: {xs: '100px', md: '108.67px', lg: '133.33px'},
							}} />
						))}
					</ImgGrid>
					<ImgGrid item xs={12} sx={{display: {xs: 'block', md: 'none'}}}>
						{clientsXs.map((client) => (
							<Box component="img" src={client} key={client} alt="client" sx={{
								width: '116px',
								padding: '20px 0 0 0',
							}} />
						))}
					</ImgGrid>
				</Grid>
			</ServiceBox>
		</ClientsContainer>
	);
};

export default Clients;
