import {Product} from '../interfaces/product.interface';
import CrownIcon from '../assets/icons/crown.svg';
import ListCheckIcon from '../assets/icons/list-check.svg';
import BooksIcon from '../assets/icons/books.svg';
import ShieldCheckIcon from '../assets/icons/shield-check.svg';
import BadgeCheckIcon from '../assets/icons/badge-check.svg';
import SparklesIcon from '../assets/icons/sparkles.svg';
import SelectIcon from '../assets/icons/select.svg';

export const Products: Product[] = [
	{
		id: 0,
		title: 'products.workQuality.title',
		description: 'products.workQuality.description',
		icon: CrownIcon,
		buttonText: 'products.workQuality.button',
	},
	{
		id: 1,
		title: 'products.organizeKnowledge.title',
		description: 'products.organizeKnowledge.description',
		icon: ListCheckIcon,
		buttonText: 'products.workQuality.button',
	},
	{
		id: 2 ,
		title: 'products.registersInformation.title',
		description: 'products.registersInformation.description',
		icon: BooksIcon,
		buttonText: 'products.workQuality.button',
	},
	{
		id: 3,
		title: 'products.bestSecurity.title',
		description: 'products.bestSecurity.description',
		icon: ShieldCheckIcon,
		buttonText: 'products.workQuality.button',
	},
	{
		id: 4 ,
		title: 'products.bestWork.title',
		description: 'products.bestWork.description',
		icon: BadgeCheckIcon,
		buttonText: 'products.workQuality.button',
	},
	{
		id: 5,
		title: 'products.familiarTools.title',
		description: 'products.familiarTools.description',
		icon: SparklesIcon,
		buttonText: 'products.workQuality.button',
	},
	{
		id: 6,
		title: 'products.create.improve.title',
		description: 'products.familiarTools.description',
		icon: SelectIcon,
		buttonText: 'products.workQuality.button',
	}
];
