import React from 'react';
import Colors from '../config/colors';
import styled from '@emotion/styled';

interface ServicesStepperProps {
	changeStep: (event: React.SyntheticEvent, newValue: number) => void;
}

enum ActiveStep {
	Compliance = 0,
	SOP = 1,
	Assessments = 2,
	Training = 3,
	Audits = 4,
	Consulting = 5,
	Risk = 6,
}

const SvgText = styled.text`
	font-size: 1.25rem;
	font-weight: 900;
	font-family: 'Roboto', sans-serif;
	transition: fill 0.3s ease-in-out;
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
	const [activeStep, setActiveStep] = React.useState(ActiveStep.Compliance);
	const handleStepClick = (e: React.SyntheticEvent, step: number) => {
		setActiveStep(step);
		changeStep(e,  step);
	};
	return (
		<svg width="752" height="625" viewBox="0 0 752 625" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="Group 11">
				<path id="Ellipse 8" d="M580 483.5C557.61 483.5 535.439 479.09 514.752 470.521C494.066 461.953 475.271 449.394 459.438 433.562C443.606 417.729 431.047 398.934 422.479 378.248C413.91 357.562 409.5 335.39 409.5 313C409.5 290.61 413.91 268.438 422.479 247.752C431.047 227.066 443.606 208.271 459.438 192.438C475.271 176.606 494.066 164.047 514.752 155.479C535.438 146.91 557.61 142.5 580 142.5" stroke="#EFEEFF" strokeWidth="3"/>
				<SvgCircle id="Ellipse1" cx="580" cy="141" r="16" fill={activeStep === ActiveStep.Compliance ? Colors.purple : Colors.purpleLighter}/>
				<SvgCircle id="Ellipse2" cx="494" cy="166" r="15.5" fill={activeStep === ActiveStep.SOP ? Colors.purple : Colors.purpleLighter} />
				<SvgCircle id="Ellipse3" cx="429" cy="229" r="16" fill={activeStep === ActiveStep.Assessments ? Colors.purple : Colors.purpleLighter}/>
				<SvgCircle id="Ellipse4" cx="409" cy="313" r="16" fill={activeStep === ActiveStep.Training ? Colors.purple : Colors.purpleLighter}/>
				<SvgCircle id="Ellipse5" cx="429" cy="397" r="16" fill={activeStep === ActiveStep.Audits ? Colors.purple : Colors.purpleLighter}/>
				<SvgCircle id="Ellipse6" cx="494" cy="459" r="16" fill={activeStep === ActiveStep.Consulting ? Colors.purple : Colors.purpleLighter}/>
				<SvgCircle id="Ellipse7" cx="580" cy="485" r="16" fill={activeStep === ActiveStep.Risk ? Colors.purple : Colors.purpleLighter}/>
				<SvgPath id="Vector1" d="M580 141.5L537.66 41.2206C534.533 33.814 527.274 29 519.235 29H412.5" stroke={activeStep === ActiveStep.Compliance ? Colors.purple : Colors.purpleLighter} strokeWidth="2" strokeLinecap="round"></SvgPath>
				<SvgPath id="Vector2" d="M494.5 166.5L428.276 126.393C425.152 124.5 421.569 123.5 417.916 123.5H325" stroke={activeStep === ActiveStep.SOP ? Colors.purple : Colors.purpleLighter} strokeWidth="2" strokeLinecap="round"></SvgPath>
				<SvgPath id="Vector3" d="M428.5 230.5L364.204 219.297C363.07 219.099 361.921 219 360.771 219H248" stroke={activeStep === ActiveStep.Assessments ? Colors.purple : Colors.purpleLighter}  strokeWidth="2" strokeLinecap="round"></SvgPath>
				<SvgPath id="Vector4" d="M393 312H217" stroke={activeStep === ActiveStep.Training ? Colors.purple : Colors.purpleLighter}  strokeWidth="2" strokeLinecap="round"/>
				<SvgPath id="Vector5" d="M428.5 397L363.621 407.732C362.542 407.91 361.451 408 360.357 408H246" stroke={activeStep === ActiveStep.Audits ? Colors.purple : Colors.purpleLighter}  strokeWidth="2" strokeLinecap="round"></SvgPath>
				<SvgPath id="Vector6" d="M493 461L427.848 501.487C424.679 503.456 421.023 504.5 417.292 504.5H321.5" stroke={activeStep === ActiveStep.Consulting ? Colors.purple : Colors.purpleLighter}  strokeWidth="2" strokeLinecap="round"></SvgPath>
				<SvgPath id="Vector7" d="M580.5 485.5L537.178 587.33C534.038 594.709 526.794 599.5 518.774 599.5H413.5" stroke={activeStep === ActiveStep.Risk ? Colors.purple : Colors.purpleLighter}  strokeWidth="2" strokeLinecap="round"></SvgPath>
				<SvgGroup id="Frame1" onClick={(e) => handleStepClick(e,ActiveStep.Compliance)}>
					<SvgRect x="90" width="325" height="55" rx="27.5" fill={activeStep === ActiveStep.Compliance ? Colors.purple : Colors.purpleLighter}/>
					<SvgText x="143" y="33"  fill={activeStep === ActiveStep.Compliance ? Colors.purpleLighter : Colors.black } fontSize="18" fontWeight="bold">Compliance & Regulation</SvgText>
				</SvgGroup>
				<SvgGroup id="Frame2" onClick={(e) => handleStepClick(e,ActiveStep.SOP)}>
					<SvgRect x="50" y="95" width="278" height="55" rx="27.5" fill={activeStep === ActiveStep.SOP ? Colors.purple : Colors.purpleLighter}/>
					<SvgText x="79" y="128" fill={activeStep === ActiveStep.SOP ? Colors.purpleLighter : Colors.black }  fontSize="18" fontWeight="bold">SOP’s & Work Instructions</SvgText>
				</SvgGroup>
				<SvgGroup id="Frame3" onClick={(e) => handleStepClick(e,ActiveStep.Assessments)}>
					<SvgRect x="20" y="190" width="234" height="55" rx="27.5" fill={activeStep === ActiveStep.Assessments ? Colors.purple : Colors.purpleLighter} />
					<SvgText x="80" y="222" fill={activeStep === ActiveStep.Assessments ? Colors.purpleLighter : Colors.black }fontSize="18" fontWeight="bold">Assessments</SvgText>
				</SvgGroup>
				<SvgGroup id="Frame4" onClick={(e) => handleStepClick(e,ActiveStep.Training)}>
					<SvgRect y="285" width="217" height="55" rx="27.5" fill={activeStep === ActiveStep.Training ? Colors.purple : Colors.purpleLighter} />
					<SvgText x="70" y="317" fill={activeStep === ActiveStep.Training ? Colors.purpleLighter : Colors.black } fontSize="18" fontWeight="bold">Training</SvgText>
				</SvgGroup>
				<SvgGroup id="Frame5" onClick={(e) => handleStepClick(e,ActiveStep.Audits)}>
					<SvgRect x="20" y="380" width="234" height="55" rx="27.5" fill={activeStep === ActiveStep.Audits ? Colors.purple : Colors.purpleLighter} />
					<SvgText x="100" y="413" fill={activeStep === ActiveStep.Audits ? Colors.purpleLighter : Colors.black } fontSize="18" fontWeight="bold">Audits</SvgText>
				</SvgGroup>
				<SvgGroup id="Frame6" onClick={(e) => handleStepClick(e,ActiveStep.Consulting)}>
					<SvgRect x="50" y="475" width="278" height="55" rx="27.5" fill={activeStep === ActiveStep.Consulting ? Colors.purple : Colors.purpleLighter} />
					<SvgText x="140" y="507" fill={activeStep === ActiveStep.Consulting ? Colors.purpleLighter : Colors.black } fontSize="18" fontWeight="bold">Consulting</SvgText>
				</SvgGroup>
				<SvgGroup id="Frame7" onClick={(e) => handleStepClick(e,ActiveStep.Risk)}>
					<SvgRect x="90" y="570" width="325" height="55" rx="27.5" fill={activeStep === ActiveStep.Risk ? Colors.purple : Colors.purpleLighter} />
					<SvgText x="180" y="602" fill={activeStep === ActiveStep.Risk ? Colors.purpleLighter : Colors.black } fontSize="18" fontWeight="bold">Risk Management</SvgText>
				</SvgGroup>
			</g>
		</svg>
	);
};

export default ServicesStepper;
