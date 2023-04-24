import {styled} from '@mui/material';
import Container from '@mui/material/Container';

export const CustomContainer = styled(Container)`
	max-width: 1280px;
	align-items: center;
	justify-content: center;
	height: 100%;
	@media (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
	@media (min-width: 960px) {
		max-width: 924px;
  }
  @media (min-width: 1200px) {
    max-width: 1164px;
  }
	@media (min-width: 1280px) {
  	max-width: 1234px;
	}
`;

