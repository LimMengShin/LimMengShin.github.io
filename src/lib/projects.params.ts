import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'unbiased-news',
		color: 'red',
		description:
			'- Developed a Flask-based website integrating Gemini AI to generate balanced, unbiased news articles.\n- Implemented features for political leaning, bias, and tone analysis.\n- Enabled article conversion into unbiased, opposite political lean, opposite tone, and simplified versions.\n- Integrated search functionality and dark mode for improved user experience.\n- Built with HTML, CSS, JavaScript, Python with Flask, and SQL.',
		shortDescription:
			'A Flask website with Gemini AI that aggregates diverse news sources to generate balanced, unbiased articles.',
		links: [{ to: 'https://news.mengshin.me', label: 'Website' }, { to: 'https://github.com/LimMengShin/news', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Unbiased News',
		period: { from: new Date(2024, 11, 1), to: new Date(2025, 0, 31) },
		skills: getSkills('python', 'flask', 'sql', 'html', 'css', 'js'),
		type: 'Web Application / Artificial Intelligence',
		screenshots: [{ src: '../images/unbiased-news-light.png', label: 'Home Page (Light Mode)' }, { src: '../images/unbiased-news-dark.png', label: 'Home Page (Dark Mode)' }, { src: '../images/unbiased-news-article-light.png', label: 'Article Page (Light Mode)' }, { src: '../images/unbiased-news-article-dark.png', label: 'Article Page (Dark Mode)' }],
	},
	{
		slug: 'chess-website',
		color: 'orange',
		description:
			'- Developed a web-based chess platform to play against Stockfish in Standard Chess and Chess960 modes.\n- Implemented adjustable engine strength to match player skill levels.\n- Integrated move history tracking, unlimited undo/redo functionality, and real-time position analysis.\n- Provided top move suggestions and evaluation displays for strategic insights.\n- Built with HTML, CSS, JavaScript, Python with Flask, `python-chess`, `stockfish`, `chessboard.js`, `chess.js`.',
		shortDescription:
			'Play standard chess or Chess960 against Stockfish with adjustable ELO, move history, undo/redo, best move suggestions, and real-time analysis.',
		links: [{ to: 'https://chess.mengshin.me', label: 'Website' }, { to: 'https://github.com/LimMengShin/chess', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Chess(960) with Stockfish',
		period: { from: new Date(2025, 0, 1), to: new Date(2025, 1, 28) },
		skills: getSkills('python', 'flask', 'html', 'css', 'js'),
		type: 'Web Application / Artificial Intelligence',
		screenshots: [{ src: '../images/chess-website.png', label: 'Chess Website' }],
	},
	{
		slug: 'class-funds',
		color: 'yellow',
		description:
			'- Co-created a website for classmates to manage and view class funds and transactions, improving transparency and efficiency.\n- Implemented role-based access control to ensure secure updates by authorised users only.\n- Streamlined fund management processes, enabling the class secretary to efficiently update and manage class funds for purchasing notes.',
		shortDescription:
			'A website for our class to manage and view class funds and transactions',
		links: [{ to: 'https://github.com/LimMengShin/235c33', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Class Funds Management System',
		period: { from: new Date(2023, 1, 1), to: new Date(2023, 2, 31) },
		skills: getSkills('python', 'flask', 'sql', 'html', 'css', 'js'),
		type: 'Web Application'
	},
	{
		slug: 'econs-chatbot',
		color: 'green',
		description:
			'- Designed and implemented a chatbot to assist students in mastering A-Level Economics concepts.\n- Incorporated Gemini AI to process user queries and provide accurate, contextual responses with improved efficiency and scalability.\n- Gained over 200 active users during testing, receiving positive feedback for its intuitive interface and depth of content.',
		shortDescription:
			'A chatbot that acts as a personal assistant to students taking the A-Level Economics subject',
		links: [],
		logo: Assets.Unknown,
		name: 'Economics Chatbot',
		period: { from: new Date(2024, 1, 1), to: new Date(2024, 5, 30) },
		skills: getSkills('python', 'flask', 'html', 'css', 'js'),
		type: 'Web Application',
	},
	{
		slug: 'damegue',
		color: 'blue',
		description:
			'- Built a Python and Flask-based website that predicts dengue risk and cases using AI and machine learning techniques.\n- Integrated real-time data from public health sources like NEA (National Environment Agency) to provide accurate and up-to-date predictions.',
		shortDescription:
			'Damegue uses AI and ML to assess a user\'s dengue risk and predict local dengue case trends.',
		links: [],
		logo: Assets.Unknown,
		name: 'Damegue',
		period: { from: new Date(2022, 0, 1), to: new Date(2022, 9, 31) },
		skills: getSkills('python', 'flask', 'html', 'css', 'js'),
		type: 'Web Application',
	},
	{
		slug: 'task-habit-app',
		color: 'indigo',
		description:
			'- Built a Flutter-based app to help users track habits and tasks, featuring a reward system for completed actions.\n- Developed a unique analytics feature that visualises user progress using heat maps. This feature helped users identify trends in their habits and tasks over time.',
		shortDescription:
			'A habit tracker and task app built with Flutter and Dart.',
		links: [],
		logo: Assets.Unknown,
		name: 'Habit tracker + Task App',
		period: { from: new Date(2024, 1, 1), to: new Date(2024, 3, 30) },
		skills: getSkills('flutter', 'dart'),
		type: 'Mobile Application',
	},
	{
		slug: 'recipely',
		color: 'violet',
		description:
			'- Developed an iOS recipe app using Swift, providing a seamless solution for finding new recipes.\n- Designed a unique search feature that allows users to filter recipes by food intolerances and dietary preferences, saving time and reducing food waste.\n- Implemented features such as a healthiness score for recipes, estimated cooking time, an in-built timer, and integration with HealthKit, enhancing the ease and efficiency of following recipes.\n- Published app on the Apple App Store, receiving multiple glowing reviews for its usefulness and ease of use.',
		shortDescription:
			'Recipely is an all-in-one receipe app built with Swift.',
		links: [],
		logo: Assets.Recipely,
		name: 'Recipely',
		period: { from: new Date(2020, 9, 1), to: new Date(2020, 11, 31) },
		skills: getSkills('swift'),
		type: 'Mobile Application',
	},
];

export default MY_PROJECTS;
