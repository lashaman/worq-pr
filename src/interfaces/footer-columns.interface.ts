export interface ContactUsFooterColumn {
	title: string;
	phone: string;
	email: string;
	copyright: string;
	privacyPolicy: string;
}

export interface FooterColumn{
	title: string;
	items: string[];
}

interface FooterColumnsInterface {
	services: FooterColumn;
	product: FooterColumn;
	about: FooterColumn;
	contactUs: ContactUsFooterColumn;
}

export default FooterColumnsInterface;
