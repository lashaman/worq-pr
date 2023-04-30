import {CustomCardProps} from '../interfaces/custom-card-props.interface';
import Monitor from '../assets/icons/monitor.svg';
import Analysis from '../assets/icons/analysis.svg';
import CustomerService from '../assets/icons/customer-service.svg';
import Ai from '../assets/icons/ai.svg';
import Dashboard from '../assets/icons/dashboard.svg';

const ProductList: CustomCardProps[] = [
	{
		title: 'productPage.list.monitor.title',
		description: 'productPage.list.monitor.description',
		icon: Monitor,
	},
	{
		title: 'productPage.list.analysis.title',
		description: 'productPage.list.analysis.description',
		icon: Analysis,
	},
	{
		title: 'productPage.list.customerService.title',
		description: 'productPage.list.customerService.description',
		icon: CustomerService,
	},
	{
		title: 'productPage.list.ai.title',
		description: 'productPage.list.ai.description',
		icon: Ai,
	},
	{
		title: 'productPage.list.dashboard.title',
		description: 'productPage.list.dashboard.description',
		icon: Dashboard,
	},
];

export default ProductList;
