export interface TeamMember {
			id: number;
			name: string;
			role: string;
			avatar: string;
			social: {
				facebook?: string;
				twitter?: string;
				linkedin: string;
			}
}
