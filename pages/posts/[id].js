import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import Balancer from 'react-wrap-balancer'

export default function Post({ postData }) {
	if (!postData) {
		notFound()
	}

	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<section>
				<script type="application/ld+json">
					{JSON.stringify(postData.structuredData)}
				</script>
				<article>
					<h1 className="font-bold text-3xl font-serif max-w-[650px]">
						<Balancer>{postData.title}</Balancer>
					</h1>
					<div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
						<Date dateString={postData.date} />
					</div>
					<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
				</article>
			</section>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData,
		},
	}
}
