import worqRoutes from './routes';
import {MenuList} from '../interfaces/menu-list.interface';

const pages: MenuList[] = [
	{key: 'header.menu.item1', route: worqRoutes.products },
	{key: 'header.menu.item2', route: worqRoutes.services },
	{key: 'header.menu.item3', route: worqRoutes.solutions },
	{key: 'header.menu.item4', route: worqRoutes.about }
];

export default pages;
