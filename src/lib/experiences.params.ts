import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'student-researcher',
		company: 'Singapore University of Technology and Design',
		description: '- Worked with Dr Cyrille Jegourel and Dr Oka Kurniawan from SUTD to develop an algorithm to identify code plagiarism and distinguish between human and AI-generated code with up to 93% accuracy.\n- Submitted research paper to the Association for Computing Machinery (ACM) conference on Innovation and Technology in Computer Science Education (ITiCSE).',
		contract: ContractType.Internship,
		type: 'Research',
		location: 'Singapore',
		period: { from: new Date(2023, 3, 1) },
		skills: getSkills('python', 'scipy', 'numpy'),
		name: 'Student Researcher',
		color: 'red',
		links: [],
		logo: Assets.SUTD,
		shortDescription: 'Developed an algorithm to identify code plagiarism and distinguish between human and AI-generated code'
	},
];

export default MY_EXPERIENCES;
