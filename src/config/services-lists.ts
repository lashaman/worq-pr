import {ServiceSteps} from '../enums/ServiceSteps';

export const TabPanelList = [
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
	{title: 'services.description.title', text: 'services.description.text',  button: 'services.description.button'},
];

export const ServicesList =  [
	{activeStep: ServiceSteps.Compliance, textContent: 'Compliance & Regulation'},
	{activeStep: ServiceSteps.SOP, textContent: 'SOP’s & Work Instructions'},
	{activeStep: ServiceSteps.Assessments, textContent: 'Assessments'},
	{activeStep: ServiceSteps.Training, textContent: 'Training'},
	{activeStep: ServiceSteps.Audits, textContent: 'Audits'},
	{activeStep: ServiceSteps.Consulting, textContent: 'Consulting'},
	{activeStep: ServiceSteps.Risk, textContent: 'Risk Management'},
];
