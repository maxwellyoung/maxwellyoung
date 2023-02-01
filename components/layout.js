import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'

const name = 'Maxwell Young'
export const siteTitle = 'Maxwell Young Website'

export default function Layout({ children, home }) {
	const { scrollYProgress } = useScroll()
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.jpg" />
				<meta
					name="description"
					content="Maxwell Young is based in Auckland, New Zealand."
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<header className={styles.header}>
				{home ? (
					<motion.div>
						<motion.div>
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={144}
								width={144}
								alt="profile of maxwell young"
							/>
						</motion.div>
						<div className="relative inline-block">
							<h1 className={utilStyles.heading2Xl}>{name}</h1>
							<Image
								src="/images/arrow.png"
								alt="Image"
								width={600}
								height={600}
								className="absolute -top-24 rotate-180 left-40 hidden"
							/>
						</div>
					</motion.div>
				) : (
					<>
						<Link href="/">
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.colorInherit}>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
		</div>
	)
}
