import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'class-funds',
		color: '#5e95e3',
		description:
			'- A website for our class to view their remaining funds and track past transactions.\n- Allows class secretary to easily update and manage our class funds when purchasing notes for our class.',
		shortDescription:
			'A website for our class to view their remaining funds and track past transactions',
		links: [{ to: 'https://github.com/LimMengShin/235c33', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Class Funds Management System',
		period: { from: new Date(2023, 1, 1), to: new Date(2023, 2, 31) },
		skills: getSkills('python', 'flask', 'sql', 'html', 'css', 'js'),
		type: 'Web Application'
	},
	{
		slug: 'econs-chatbot',
		color: '#ff3e00',
		description:
			'A chatbot that acts as a personal assistant to students taking the A Levels Economics subject.',
		shortDescription:
			'A chatbot that acts as a personal assistant to students taking the A Levels Economics subject.',
		links: [],
		logo: Assets.Unknown,
		name: 'Economics Chatbot',
		period: { from: new Date(2024, 1, 1) },
		skills: getSkills('python', 'flask', 'html', 'css', 'js', 'flutter', 'dart'),
		type: 'Web Application / Mobile Application',
	},
	{
		slug: 'damegue',
		color: '#ff3e00',
		description:
			'Damegue is a website that can determine the chances of a user having the dengue virus, and show the predicted number of dengue cases in an area using artificial intelligence and machine learning. It is built using Python and Flask.',
		shortDescription:
			'Damegue is a website that can determine the chances of a user having the dengue virus, and show the predicted number of dengue cases in an area using artificial intelligence and machine learning.',
		links: [],
		logo: Assets.Unknown,
		name: 'Damegue',
		period: { from: new Date(2022, 0, 1), to: new Date(2022, 9, 31) },
		skills: getSkills('python', 'flask', 'html', 'css', 'js'),
		type: 'Web Application',
	},
	{
		slug: 'recipely',
		color: '#ff3e00',
		description:
			'As part of the Swift Accelerator Programme, our team created Recipely, an all-in-one recipe app developed for iOS devices, built using Swift.',
		shortDescription:
			'Recipely is an all-in-one receipe app built using Swift.',
		links: [{ to: 'https://apps.apple.com/us/app/recipely/id1545119133', label: 'App Store' }],
		logo: Assets.Recipely,
		name: 'Recipely',
		period: { from: new Date(2020, 9, 1), to: new Date(2020, 11, 31) },
		skills: getSkills('swift'),
		type: 'Mobile Application',
	},
	{
		slug: 'task-habit-app',
		color: '#ff3e00',
		description:
			'A habit tracker and task app built using Flutter and Dart. It includes a feature where users can redeem rewards upon completion of tasks or habits.',
		shortDescription:
			'A habit tracker and task app built using Flutter and Dart.',
		links: [],
		logo: Assets.Unknown,
		name: 'Habit tracker + Task App',
		period: { from: new Date(2024, 1, 1) },
		skills: getSkills('flutter', 'dart'),
		type: 'Mobile Application',
	},
	{
		slug: 'ai-chess-engine',
		color: '#ff3e00',
		description:
			'A chess engine that uses the minimax algorithm to determine the best move to play at any given position. It is built using Python.',
		shortDescription:
			'A chess engine that uses the minimax algorithm to determine the best move to play at any given position.',
		links: [],
		logo: Assets.Unknown,
		name: 'AI Chess Engine',
		period: { from: new Date(2023, 10, 1), to: new Date(2023, 11, 31) },
	skills: getSkills('python'),
		type: 'Artificial Intelligence',
	},
];

export default MY_PROJECTS;
