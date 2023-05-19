'use client'

import { FC, useEffect } from 'react'
import Image from 'next/image'
import { Layout } from '@components/Layout'
import styles from '@css/common.module.css'
import { rgbDataURL } from '@components/MDX'

const Error: FC<{ error: Error }> = ({ error }) => {
	useEffect(() => console.error(error), [error])
	return (
		<Layout>
			<div className={styles.error_wrapper}>
				<div>
					<h1>Something messed up :( try refreshing.</h1>
					<p className={styles.paragraph}>
						Try checking the console for an error.
					</p>
					<p>
						If something's broken, I&apos;d really appreciate if you opened an
						issue on{' '}
						<a
							href="https://github.com/maxwellyoung/maxwellyoung/"
							rel="noreferrer"
							target="_blank"
						>
							GitHub
						</a>{' '}
						with the logs from the console and any other relevant information. .
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
}

export default Error
