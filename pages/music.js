import React from 'react'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

const design = () => {
	return (
		<Layout>
			<div className="mb-4">
				<p>
					I've been producing, writing, recording and releasing music since
					2015. <br /> I'm very passionate about creating alternative (new), pop
					(for the people) music (magic). This isn't the best place to listen to
					music but I've included some of my music videos below.
				</p>
			</div>
			<div className="mb-4">
				<h1 className="bold">
					<span className="italic">Cherry Pie</span> | Directed by Tom
					Shackleton & Amadeo Grosman
				</h1>

				<iframe
					className="w-full h-64"
					src="https://www.youtube.com/embed/HwndSiUB6u8?"
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="mb-4">
				<h1>
					<span className="italic">Cleopatra</span> | Directed by Tom Shackleton
					& Amadeo Grosman
				</h1>
				<iframe
					className="w-full h-64"
					src="https://www.youtube.com/embed/NPYnIg-fKTg?"
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="mb-4">
				<h1 className="bold">
					<span className="italic">Videostar</span> | Directed by Bridget Mahy
				</h1>

				<iframe
					className="w-full h-64"
					src="https://www.youtube.com/embed/E8Sdt9eroWs"
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="mb-4">
				<h1 className="bold">
					<span className="italic">Dread!</span> | Directed by Max Pirrit
				</h1>

				<iframe
					className="w-full h-64"
					src="https://www.youtube.com/embed/LybW6oYjbRI"
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		</Layout>
	)
}

export default design
