import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const design = () => {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className="mb-4">
				<p>
					I don't consider myself a designer but it's something I'm doing so I
					thought I'd include it here.
				</p>
			</div>
			<div className="italic text-lg">
				<div className="mb-4">
					<p>
						<span className="font-bold">Church</span> - Orange Cover Artwork
					</p>
					<a href="https://open.spotify.com/album/6Fg8W91ZK9HeBZSsLWXTje?si=c9245164aa614844">
						<Image
							src="/images/orange.png"
							width={800}
							height={800}
							alt="artwork for orange by church"
						/>
					</a>
				</div>
				<div className="mb-4">
					<p>
						<span className="font-bold">Maxwell Young</span> - No. 5 Cover
						Artwork
					</p>
					<a href="https://open.spotify.com/track/0Qxq1Nf297aBK1k8E9py5P?si=2e1b028407df470f">
						<Image
							src="/images/no5.jpg"
							width={800}
							height={800}
							alt="artwork for no. 5 by maxwell young"
						/>
					</a>
				</div>
			</div>
		</Layout>
	)
}

export default design
