import React from 'react';

export interface Product {
	id: number;
	title: string;
	description: React.ReactNode;
	icon: string;
	buttonText: string;
}
