import React from 'react';
import Colors from '../../config/colors';
import styled from '@emotion/styled';
import {ServiceSteps} from '../../enums/ServiceSteps';

interface ServicesStepperProps {
	changeStep: (event: React.SyntheticEvent, newValue: number) => void;
}


const SvgText = styled.text`
	font-weight: 900;
	font-family: 'Avenir Medium';
	transition: fill 0.3s ease-in-out;
	@media (min-width: 600px) {
		font-size: 16px;
  }
	@media (min-width: 1200px) {
		font-size: 18px;
  }
`;

const SvgRect = styled.rect`
	transition: fill 0.3s ease-in-out;
`;

const SvgCircle = styled.circle`
	transition: fill 0.3s ease-in-out;
`;

const SvgPath = styled.path`
	transition: stroke 0.3s ease-in-out;
`;

const SvgGroup = styled.g`
	cursor: pointer;
`;

const ServicesStepper = ( { changeStep}: ServicesStepperProps) => {
	const [activeStep, setActiveStep] = React.useState(ServiceSteps.Compliance);
	const getActiveBgColor = (step: number) =>  activeStep === step ? Colors.purple : Colors.purpleLighter;
	const getActiveTextColor = (step: number) =>  activeStep === step ? Colors.purpleLighter : Colors.black;
	const svgCircles = [
		{id: 'Ellipse1', cx: 580, cy: 141, r: 16, activeStep: ServiceSteps.Compliance},
		{id: 'Ellipse2', cx: 494, cy: 166, r: 15.5, activeStep: ServiceSteps.SOP},
		{id: 'Ellipse3', cx: 429, cy: 229, r: 16, activeStep: ServiceSteps.Assessments},
		{id: 'Ellipse4', cx: 409, cy: 313, r: 16, activeStep: ServiceSteps.Training},
		{id: 'Ellipse5', cx: 429, cy: 397, r: 16, activeStep: ServiceSteps.Audits},
		{id: 'Ellipse6', cx: 494, cy: 459, r: 16, activeStep: ServiceSteps.Consulting},
		{id: 'Ellipse7', cx: 580, cy: 485, r: 16, activeStep: ServiceSteps.Risk},
	];

	const svgPaths = [
		{id: 'Vector1', d: 'M580 141.5L537.66 41.2206C534.533 33.814 527.274 29 519.235 29H412.5', activeStep: ServiceSteps.Compliance},
		{id: 'Vector2', d: 'M494.5 166.5L428.276 126.393C425.152 124.5 421.569 123.5 417.916 123.5H325', activeStep: ServiceSteps.SOP},
		{id: 'Vector3', d: 'M428.5 230.5L364.204 219.297C363.07 219.099 361.921 219 360.771 219H248', activeStep: ServiceSteps.Assessments},
		{id: 'Vector4', d: 'M393 312H217', activeStep: ServiceSteps.Training},
		{id: 'Vector5', d: 'M428.5 397L363.621 407.732C362.542 407.91 361.451 408 360.357 408H246', activeStep: ServiceSteps.Audits},
		{id: 'Vector6', d: 'M493 461L427.848 501.487C424.679 503.456 421.023 504.5 417.292 504.5H321.5', activeStep: ServiceSteps.Consulting},
		{id: 'Vector7', d: 'M580.5 485.5L537.178 587.33C534.038 594.709 526.794 599.5 518.774 599.5H413.5', activeStep: ServiceSteps.Risk},
	];

	const svgGroups = [
		{id: 'Frame1', rectProps: { x: 90, width: 325, height: 55, rx: 27.5 }, textProps: { x: 143, y: 33, fontSize: 18, fontWeight: 'bold' }, textContent: 'Compliance & Regulation', activeStep: ServiceSteps.Compliance},
		{id: 'Frame2', rectProps: { x: 50, y: 95, width: 278, height: 55, rx: 27.5 }, textProps: { x: 79, y: 128, fontSize: 18, fontWeight: 'bold' }, textContent: 'SOP’s & Work Instructions', activeStep: ServiceSteps.SOP},
		{id: 'Frame3', rectProps: { x: 20, y: 190, width: 234, height: 55, rx: 27.5 }, textProps: { x: 80, y: 222, fontSize: 18, fontWeight: 'bold' }, textContent: 'Assessments', activeStep: ServiceSteps.Assessments},
		{id: 'Frame4', rectProps: { y: 285, width: 217, height: 55, rx: 27.5 }, textProps: { x: 70, y: 317, fontSize: 18, fontWeight: 'bold' }, textContent: 'Training', activeStep: ServiceSteps.Training},
		{id: 'Frame5', rectProps: { x: 20, y: 380, width: 234, height: 55, rx: 27.5 }, textProps: { x: 100, y: 413, fontSize: 18, fontWeight: 'bold' }, textContent: 'Audits', activeStep: ServiceSteps.Audits},
		{id: 'Frame6', rectProps: { x: 50, y: 475, width: 278, height: 55, rx: 27.5 }, textProps: { x: 140, y: 507, fontSize: 18, fontWeight: 'bold' }, textContent: 'Consulting', activeStep: ServiceSteps.Consulting},
		{id: 'Frame7', rectProps: { x: 90, y: 570, width: 325, height: 55, rx: 27.5 }, textProps: { x: 180, y: 602, fontSize: 18, fontWeight: 'bold' }, textContent: 'Risk Management', activeStep: ServiceSteps.Risk},
	];


	const handleStepClick = (e: React.SyntheticEvent, step: number) => {
		setActiveStep(step);
		changeStep(e,  step);
	};
	return (
		<svg width="752" height="625" viewBox="0 0 752 625" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="Group 11">
				<path id="Ellipse 8" d="M580 483.5C557.61 483.5 535.439 479.09 514.752 470.521C494.066 461.953 475.271 449.394 459.438 433.562C443.606 417.729 431.047 398.934 422.479 378.248C413.91 357.562 409.5 335.39 409.5 313C409.5 290.61 413.91 268.438 422.479 247.752C431.047 227.066 443.606 208.271 459.438 192.438C475.271 176.606 494.066 164.047 514.752 155.479C535.438 146.91 557.61 142.5 580 142.5" stroke="#EFEEFF" strokeWidth="3"/>
				{svgCircles.map(circle => (
					<SvgCircle
						key={circle.id}
						id={circle.id}
						cx={circle.cx}
						cy={circle.cy}
						r={circle.r}
						fill={getActiveBgColor(circle.activeStep)}
					/>
				))}
				{svgPaths.map(path => (
					<SvgPath
						key={path.id}
						id={path.id}
						d={path.d}
						stroke={getActiveBgColor(path.activeStep)}
						strokeWidth="2"
						strokeLinecap="round"
					/>
				))}
				{svgGroups.map((group) => (
					<SvgGroup key={group.id} id={group.id} onClick={(e) => handleStepClick(e, group.activeStep)}>
						<SvgRect
							{...group.rectProps}
							fill={
								getActiveBgColor(group.activeStep)
							}
						/>
						<SvgText
							{...group.textProps}
							fill={getActiveTextColor(group.activeStep)}
						>
							{group.textContent}
						</SvgText>
					</SvgGroup>
				))}
				<path fillRule="evenodd" clipRule="evenodd" d="M608.479 352.711L556.723 300.944L581.025 276.641L621.226 316.844L608.479 352.711Z" fill="#3F25F2"/>
				<path fillRule="evenodd" clipRule="evenodd" d="M622.738 312.846L611.232 301.341L638 274.573L622.738 312.846Z" fill="#160AB4"/>
				<path fillRule="evenodd" clipRule="evenodd" d="M554.366 352.711L524.874 274.573L550.559 300.279L578.678 328.397L554.366 352.711Z" fill="#A39EF8"/>
			</g>
		</svg>
	);
};

export default ServicesStepper;
