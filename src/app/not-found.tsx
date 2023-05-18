import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@components/Layout'
import styles from '@css/common.module.css'
import { rgbDataURL } from '@components/MDX'

const Error: NextPage = () => (
	<Layout>
		<div className={styles.error_wrapper}>
			<div>
				<h1>404—not found.</h1>
				<p className={styles.paragraph}>
					I don&apos;t know what you&apos;re looking for, but it ain&apos;t
					here.
				</p>
				<p>
					If the link is broken, I&apos;d really appreciate if you tossed me an{' '}
					<a
						href="mailto:maxtheyoung@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						email
					</a>{' '}
					or a DM on{' '}
					<a
						href="https://twitter.com/internetmaxwell"
						target="_blank"
						rel="noreferrer"
					>
						Twitter
					</a>{' '}
					so I could fix it. I&apos;ve recently renamed some of my older posts,
					so you might wanna check around my <Link href="/blog">blog</Link> if
					you&apos;re looking for something of that sort.
				</p>
				<div className={styles.image}>
					<Image
						src="/photos/crying.jpg"
						alt="Adrien Brody crying"
						draggable={false}
						priority
						fill
						placeholder="blur"
						blurDataURL={rgbDataURL(198, 206, 206)}
					/>
				</div>
			</div>
		</div>
	</Layout>
)

export default Error
