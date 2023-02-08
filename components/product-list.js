import React, { useState, useEffect } from 'react'

const ProductList = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('hf0ed0c8acacb43843c8dcd5695d72a00.json', {
			headers: {
				'X-Shopify-Access-Token': '2263b95bf51a2d4e15d2384f34f06184',
			},
		})
			.then((res) => res.json())
			.then((data) => setProducts(data.products))
	}, [])

	return (
		<>
			<h1>Shop</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</>
	)
}

export default ProductList
