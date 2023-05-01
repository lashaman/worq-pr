import {Box, Divider, Grid, Link, List, ListItem, styled, Typography} from '@mui/material';
import React from 'react';
import {FooterColumn} from '../../interfaces/footer-columns.interface';
import Colors from '../../config/colors';
import {useTranslation} from 'react-i18next';



interface FooterListRendererProps {
	isScreenMobile?: boolean;
	list: FooterColumn;
}

const FooterListTitle = styled(Typography)`
	font-family: 'Poppins Bold';
	@media (min-width: 0px) {
    color: ${Colors.purple};
		font-size: 18px;
  }
	@media (min-width: 900px) {
		color: ${Colors.black};
  }
	@media (min-width: 1200px) {  
		font-size: 20px;
  }
`;


const FooterListItem = styled(Typography)`
  font-family: 'Poppins Light';
	@media (min-width: 0px) {
		font-size: 16px;
  }
	@media (min-width: 900px) {
		font-size: 18px;
  }
`;


const FooterList = ({list, isScreenMobile}: FooterListRendererProps) => {
	const {t} = useTranslation();
	return	(
		<>
			{isScreenMobile &&
			<Divider sx={{borderTop: `2px solid ${Colors.purple}`, width: '20%', margin: '10px 0 20px 0'}}/>}
			{!isScreenMobile && (
				<List>
					<FooterListTitle variant="h6">
						{t(list.title)}
					</FooterListTitle>
					{list.items.map((item, i) => (
						<ListItem key={i} disableGutters>
							<Link href="src/features#" color="inherit" underline="hover">
								<FooterListItem>{t(item)}</FooterListItem>
							</Link>
						</ListItem>
					))}
				</List>
			)}
			{isScreenMobile && (
				<>
					<Box>
						<FooterListTitle variant="h6">
							{t(list.title)}
						</FooterListTitle>
					</Box>
					<Grid container spacing={1} mb={2}>
						{list.items.map((item, i) => (
							<Grid item xs={3} key={i}>
								<Link href="src/features#" color="inherit" underline="hover">
									<FooterListItem>{t(item)}</FooterListItem>
								</Link>
							</Grid>))}
					</Grid>
				</>
			)}
		</>
	);
};

export default FooterList;
