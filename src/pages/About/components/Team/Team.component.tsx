import React from 'react';
import {Card, CardContent, CardMedia, Grid, IconButton, Paper, styled, Typography} from '@mui/material';
import Colors from '../../../../config/colors';
import {CustomContainer} from '../../../../components/CustomMaterialComponents/CustomMaterial.component';
import {TeamMember} from '../../../../interfaces/team-member.interface';
import {LinkedInCustomIcon} from '../../../../components/JsxIcons/JsxIcons.component';
import {Trans} from 'react-i18next';

const TeamTitle = styled(Typography)`
	font-family: 'Avenir Black';
	padding-bottom: 20px;
	color: ${Colors.black};
	white-space: pre-wrap;
	& > span {
		color: ${Colors.purple};
	}
`;

interface TeamProps {
	title: string,
	teamMembers: Array<TeamMember>,
}

const Team = ({teamMembers, title}: TeamProps) => {
	return (
		<Paper elevation={0} sx={{backgroundColor: Colors.purpleLighter, padding: {xs: '50px 0', md: '70px 0', lg: '100px 0'}}} >
			<CustomContainer>
				<Grid container justifyContent="center" alignItems="center" spacing={2.5}>
					<Grid item xs={12}>
						<TeamTitle variant="h2" sx={{
							fontSize: {xs: '40px', md: '48px' , lg: '68px', lineHeight: 1.15}
						}} >
							<Trans i18nKey={title} components={{span: <span />}}/>
						</TeamTitle>
					</Grid>
					{teamMembers.map((teamMember: TeamMember) => (
						<Grid item xs={6} md={3}  key={teamMember.id}>
							<Card raised={false} sx={{background: 'transparent', position: 'relative', borderRadius: 0, boxShadow: 'none', cursor: 'pointer'}}>
								<CardMedia
									component="img"
									image={teamMember.avatar}
									sx={{borderRadius: '20px'}}
									alt={teamMember.name}
								/>
								<IconButton aria-label="linkedin" sx={{position: 'absolute', top: '10px', left: '10px'}} href={teamMember.social.linkedin}>
									<LinkedInCustomIcon />
								</IconButton>
								<CardContent sx={{padding: '20px 0', minHeight: {xs: '100px', md: '90px'}}}>
									<Typography variant="h5" sx={{
										color: Colors.black,
										fontFamily: 'Avenir Black',
										fontSize: {xs: '18px', md: '22px', lg: '26px'},
										lineHeight: 1.15,
										paddingTop: 0,
										paddingBottom: 0}}>
										{teamMember.name}
									</Typography>
									<Typography variant="body1" sx={{
										color: Colors.black,
										fontFamily: 'Poppins Light',
										fontSize: {xs: '14px', md: '16px', lg: '18px'},
										lineHeight: 1.15,
										paddingBottom: '20px'
									}}>
										{teamMember.role}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</CustomContainer>
		</Paper>
	);
};

export default Team;
