import {CustomCardProps} from '../interfaces/custom-card-props.interface';
import ThumbsUp from '../assets/icons/thumbs-up.svg';
import Delete from '../assets/icons/delete.svg';
import PiggyBank from '../assets/icons/piggy-bank.svg';
import BadgeCheck from '../assets/icons/badge-check.svg';

export const BenefitsList: CustomCardProps[] = [
	{
		title: 'benefits.list.delightedCustomers.title',
		description: 'benefits.list.delightedCustomers.description',
		icon: ThumbsUp,
	},
	{
		title: 'benefits.list.eliminateDefects.title',
		description: 'benefits.list.eliminateDefects.description',
		icon: Delete,
	},
	{
		title: 'benefits.list.reduceCosts.title',
		description: 'benefits.list.reduceCosts.description',
		icon: PiggyBank,
	},
	{
		title: 'benefits.list.achieveCompliance.title',
		description: 'benefits.list.achieveCompliance.description',
		icon: BadgeCheck,
	},
];
