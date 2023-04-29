
import React from 'react';
import Colors from '../../config/colors';
interface RightProps {
	left?: boolean;
	disabled?: boolean;
}
export const Right = ({left, disabled}: RightProps)=> (<svg style={{transform: left ? 'rotate(180deg)' : ''}} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle cx="27" cy="27" r="25.5" transform="matrix(-1 0 0 1 54 0)" style={{stroke: disabled ? Colors.purpleLight : Colors.purple}}  strokeWidth="3"/>
	<path
		d="M22.5856 15.6306C22.586 16.0615 22.7575 16.4745 23.0623 16.779L31.3736 25.0903C31.6252 25.3418 31.8248 25.6404 31.9609 25.969C32.0971 26.2977 32.1671 26.6499 32.1671 27.0056C32.1671 27.3613 32.0971 27.7136 31.9609 28.0422C31.8248 28.3709 31.6252 28.6695 31.3736 28.921L23.0731 37.2215C22.7771 37.5279 22.6133 37.9384 22.617 38.3645C22.6207 38.7905 22.7916 39.1981 23.0929 39.4994C23.3942 39.8007 23.8018 39.9716 24.2279 39.9753C24.6539 39.979 25.0644 39.8152 25.3709 39.5192L33.6714 31.2252C34.7875 30.1069 35.4143 28.5915 35.4143 27.0116C35.4143 25.4316 34.7875 23.9162 33.6714 22.798L25.3601 14.4812C25.1328 14.2538 24.8432 14.0989 24.5279 14.0361C24.2126 13.9734 23.8857 14.0056 23.5887 14.1286C23.2917 14.2517 23.0378 14.4601 22.8593 14.7274C22.6807 14.9948 22.5855 15.3091 22.5856 15.6306Z"
		style={{fill: disabled ? Colors.purpleLight : Colors.purple}}/>
</svg>);

interface PhoneProps {
	style?: React.CSSProperties;
}

export const FatPhone = ({style}: PhoneProps) => (<svg  style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M19.2458 13.9759C19.2208 13.95 17.2114 12.4038 17.2114 12.4038C16.7292 11.9446 16.0885 11.6889 15.4226 11.69C14.7567 11.6911 14.1168 11.9488 13.6361 12.4097L12.05 13.7504C10.7503 13.2134 9.56959 12.4246 8.57578 11.4296C7.58196 10.4345 6.79465 9.25283 6.2591 7.95241L7.59475 6.3662C8.0546 5.88534 8.31159 5.24583 8.31237 4.58046C8.31315 3.91509 8.05765 3.27498 7.59893 2.79305C7.59893 2.79305 6.05458 0.786905 6.02787 0.761025C5.55187 0.280849 4.90592 0.00749576 4.22987 0.00015187C3.55381 -0.00719202 2.90207 0.252065 2.41576 0.721787L1.4566 1.55664C-4.98876 8.40991 11.6409 25.0485 18.4862 18.5041L19.2475 17.6275C19.7298 17.1423 20.0003 16.4859 20 15.8017C19.9997 15.1176 19.7285 14.4606 19.2458 13.9759Z" fill="#3F25F2"/>
</svg>
);

export const ServicePageHero = () => (<svg width="847" height="353" viewBox="0 0 847 353" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_43_3896)">
		<rect width="847" height="353" fill="#EFEEFF" fillOpacity="0.4"/>
		<g filter="url(#filter0_f_43_3896)">
			<circle cx="799.5" cy="48.5" r="100.5" fill="#A39EF8"/>
		</g>
	</g>
	<defs>
		<filter id="filter0_f_43_3896" x="399" y="-352" width="801" height="801" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
			<feFlood floodOpacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_43_3896"/>
		</filter>
		<clipPath id="clip0_43_3896">
			<rect width="847" height="353" fill="white"/>
		</clipPath>
	</defs>
</svg>
);

