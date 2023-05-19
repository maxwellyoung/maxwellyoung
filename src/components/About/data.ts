import { Content } from './Section'

export const about: Content[] = [
	{
		title: 'Background',
		content:
			"Born and raised in Wellington, New Zealand. I've been into coding from a young age, and I'm passionate about many creative pursuits, including photography, design, and coding. This combination of interests is what led me to develop skills through guiltlessly exploring my passions and interests. I center my work on teaching/writing to empower, educate and elevate people.",
	},
	{
		title: 'Skills',
		content:
			"I primarily work with React and Next.js ecosystem, and I've worked extensively with several tools such as TypeScript, Jest/Enzyme, Redux, Storybook, Chakra, Tailwind/SCSS, PostgreSQL, CircleCI, and much more. The web is an endless medium of opportunities, and I have yet to scratch the surface.",
	},
	{
		title: 'Now',
		content:
			'Freelancing web projects, looking for a new position to gain further experience, understanding.',
	},
]

export const work: Content[] = [
	{
		title: 'Internal Dashboard App at Spark New Zealand',
		content: '',
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
		href: 'https://noid.vercel.app/',
	},
	{
		title: 'Real Time Messaging App (WIP)',
		content:
			"This week, I am developing a Real Time messaging app to explore the capabilities of web sockets and real-time communication. I am particularly thrilled about this project because it provides an opportunity to leverage Next.js's new App Router, which I believe represents the future direction of web development, blending server and client components seamlessly. For the implementation, I am utilizing TypeScript, React, Next.js, and Tailwind CSS. Additionally, I am integrating Socket.io for web socket functionality, and I am excited to use the Chakra UI component library for the first time, enhancing the app's user interface.",
		newTab: true,
	},
]

export const writing: Content[] = [
	{
		title: 'About',
		content: 'Why I made this blog',
		href: '/writing/about',
	},
]
