import Assets from './data/assets';
import type { Skill } from './types';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'cpp',
		color: 'cyan',
		description: '',
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'python',
		color: 'cyan',
		description: '',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'flutter',
		color: 'cyan',
		description: '',
		logo: Assets.Flutter,
		name: 'Flutter'
	}),
	s({
		slug: 'dart',
		color: 'cyan',
		description: '',
		logo: Assets.Dart,
		name: 'Dart'
	}),
	s({
		slug: 'swift',
		color: 'cyan',
		description: '',
		logo: Assets.Swift,
		name: 'Swift'
	}),
	s({
		slug: 'sql',
		color: 'cyan',
		description: '',
		logo: Assets.SQL,
		name: 'SQL'
	}),
	s({
		slug: 'scipy',
		color: 'yellow',
		description: '',
		logo: Assets.Scipy,
		name: 'SciPy'
	}),
	s({
		slug: 'numpy',
		color: 'yellow',
		description: '',
		logo: Assets.Numpy,
		name: 'NumPy'
	}),
	s({
		slug: 'flask',
		color: 'yellow',
		description: '',
		logo: Assets.Flask,
		name: 'Flask'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: '',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description: '',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description: '',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
