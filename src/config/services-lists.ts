import {ServiceSteps} from '../enums/ServiceSteps';
import {ServiceListInterface} from '../interfaces/service-list.interface';
import {TabPanelListInterface} from '../interfaces/tabpanel-list.interface';

export const TabPanelList: TabPanelListInterface[] = [
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
];

export const ServicesList: ServiceListInterface[] =  [
	{activeStep: ServiceSteps.Compliance, textContent: 'Compliance & Regulation'},
	{activeStep: ServiceSteps.SOP, textContent: 'SOP’s & Work Instructions'},
	{activeStep: ServiceSteps.Assessments, textContent: 'Assessments'},
	{activeStep: ServiceSteps.Training, textContent: 'Training'},
	{activeStep: ServiceSteps.Audits, textContent: 'Audits'},
	{activeStep: ServiceSteps.Consulting, textContent: 'Consulting'},
	{activeStep: ServiceSteps.Risk, textContent: 'Risk Management'},
];
