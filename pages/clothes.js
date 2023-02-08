import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ProductList from '../components/product-list'

const clothes = () => {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className="mb-8">{/* <ProductList /> */}</div>
		</Layout>
	)
}

export default clothes
