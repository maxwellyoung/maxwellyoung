import { Content } from './Section'

export const about: Content[] = [
	{
		title: 'Background',
		content:
			'Born and raised in Wellington, New Zealand. Passionate about many creative pursuits, including music, design, film, writing, and coding. This combination of interests is what led me to a relentless hunger to learn in order to express and find harmony in the confusing world we live in.',
	},
	{
		title: 'Skills',
		content:
			'I primarily work with React and Next.js ecosystem with TypeScript, TailwindCSS for styling, Figma for design and a variety of database solutions. The web is an endless medium of opportunities, and I have yet to scratch the surface.',
	},
	{
		title: 'Resume',
		href: '/resume.pdf',
		content:
			'As a freelance web developer, I am actively seeking new opportunities to expand my experience and deepen my understanding in order to take my skills to the next level.',
	},
]

export const otherventures: Content[] = [
	{
		title: 'Musician',
		content:
			'I release alternative pop music under my own name I write and produce with the assistance of Eddie Johnston.',
	},
	{
		title: 'DJ',
		content:
			'I help people have fun by DJing parties with my friend Thom.',
	},
	{
		title: 'Composer',
		content:
			'Currently composing a video game soundtrack.',
	},
	{
		title: 'Radio DJ',
		content:
			'I host a monthly web radio show on beloved.wtf featuring an eclectic mix of songs that make me believe in the magic of music.',
	},
	
	{
		title: 'Visual Artist',
		content:
			'Also working towards becoming a more confident visual artist through directing videos and practicing design.',
	},
]

export const work: Content[] = [
	{
		title: 'Internal Dashboard App at Spark New Zealand',
		content:
			"During my employment at Spark New Zealand, I was tasked with designing and developing the front end of on an internal dashboard application for marketers at Spark New Zealand, and I am particularly proud of my contributions to this project. My role was to design the application in Figma based on an existing PowerBI dashboard, allowing for the inclusion of new helpful information to be displayed from machine learning algorithms and other sources. I also developed the front-end of the application in React and Next.js. Throughout the project, I collaborated closely with the product team and stakeholders to ensure that the application met their needs and was easy to use. I also implemented best practices in software development to ensure that the application was scalable, efficient, and maintainable. Overall, I am proud of my contributions to this project and the positive impact it has had on the productivity and effectiveness of Spark's marketing team.",
		newTab: true,
	},
	{
		title: 'Tom Crampin Portfolio',
		content:
			'A portfolio site for Tom Crampin, a New Zealand based motion designer.',
		newTab: true,
		href: 'https://tom-crampin.vercel.app/',
	},
	{
		title: 'Noid | Twitter Clone',
		content:
			'A Twitter clone created using TypeScript, Next.js, Clerk Auth, Tailwind and TRPC. This project was created as a way to learn about TRPC and Clerk Auth. In future I intend to add more features including additional login options, pagination, embedded image uploads, and a more robust UI.',
		newTab: true,
		href: 'https://noid-maxwellyoung.vercel.app/',
	},
	{
		title: 'Real Time Messaging App (WIP)',
		content:
			"I am developing a Real Time messaging app to explore the capabilities of web sockets and real-time communication. I am particularly thrilled about this project because it provides an opportunity to leverage Next.js's new App Router, which I believe represents the future direction of web development, blending server and client components seamlessly. For the implementation, I am utilizing TypeScript, React, Next.js, and Tailwind CSS. Additionally, I am integrating Socket.io for web socket functionality, and I am excited to use the Chakra UI component library for the first time, enhancing the app's user interface.",
		newTab: true,
	},
	{
		title: 'Calender React Native App (WIP)',
		content:
			'Building a minimalist and efficient calendar app built with React Native and Expo, designed to simplify schedule management for developers and enhance productivity seamlessly.',
		newTab: true,
	},
]

export const writing: Content[] = [
	{
		title: 'Understanding React Terminology',
		content: 'An article about React concurrency',
		href: '/writing/concurrency',
	},
	{
		title: 'AI in Development',
		content:
			'Exploring the evolving relationship between developers and AI, this article delves into the challenges, benefits, and limitations of AI tools in the development process while emphasizing the importance of complementing AI with deep expertise and continuous learning.',
		href: '/writing/ai',
	},
]
