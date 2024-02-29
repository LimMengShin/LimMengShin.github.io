import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'A-Level',
		description: '',
		location: 'Singapore',
		logo: Assets.DHS,
		name: '',
		organization: 'Dunman High School',
		period: { from: new Date(2023, 0, 1), to: new Date(2024, 11, 31) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['H2 Computing', 'H2 Mathematics', 'H2 Physics', 'H2 Economics', 'H1 General Paper', 'H1 Project Work']
	},
	{
		degree: 'O-Level',
		description: '',
		location: 'Singapore',
		logo: Assets.SST,
		name: '',
		organization: 'School of Science and Technology',
		period: { from: new Date(2019, 0, 1), to: new Date(2022, 11, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Computing', 'Elementary Mathematics', 'Additional Mathematics', 'Physics', 'Chemistry', 'Humanities (Social Studies / History)', 'English Language', 'Chinese Language']
	}
];
