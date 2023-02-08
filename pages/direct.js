import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const direct = () => {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className="mb-4">
				<p>Working on some videos for myself and other artists.</p>
			</div>
		</Layout>
	)
}

export default direct
