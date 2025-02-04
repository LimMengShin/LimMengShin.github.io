import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'micron-intern',
		company: 'Micron Technology',
		description: '- Collaborated with the Smart Manufacturing and Artificial Intelligence team to understand advanced AI-driven workflows, including developing machine learning models to identify defects in semiconductor wafers. These models analysed high-resolution imaging data to detect anomalies and classify defect types, significantly enhancing manufacturing quality and yield.\n- Presented a business case solution to three technical directors, highlighting innovative approaches to improve efficiency in semiconductor manufacturing.',
		contract: ContractType.Internship,
		type: 'Engineering',
		location: 'Singapore',
		period: { from: new Date(2024, 11, 2), to: new Date(2024, 11, 7) },
		skills: getSkills('python'),
		name: 'Intern',
		color: 'blue',
		links: [],
		logo: Assets.Micron,
		shortDescription: 'Developed ML models for detecting defects in semiconductor wafers, boosting quality and yield, and presented a business case to technical directors'
	},
	{
		slug: 'student-researcher',
		company: 'Singapore University of Technology and Design',
		description: '- Collaborated with Dr Cyrille Jegourel and Dr Oka Kurniawan from SUTD to develop an algorithm to distinguish between human and AI-generated code with up to 93% accuracy.\n- Presented findings at the 24th Koli Calling International Conference on Computing Education Research.',
		contract: ContractType.Internship,
		type: 'Research',
		location: 'Singapore',
		period: { from: new Date(2023, 3, 1), to: new Date(2024, 10, 30) },
		skills: getSkills('python', 'scipy', 'numpy'),
		name: 'Student Researcher',
		color: 'red',
		links: [{ to: 'https://doi.org/10.1145/3699538.3699569', label: 'Conference Paper' }],
		logo: Assets.SUTD,
		shortDescription: 'Co-authored a paper on distinguishing human vs. AI-generated code (93% accuracy), presented findings at Koli Calling 2024'
	},
];

export default MY_EXPERIENCES;
