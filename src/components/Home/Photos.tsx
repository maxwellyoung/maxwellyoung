'use client'

import Image from 'next/image'
import { FC, useState } from 'react'
import styles from '@css/home.module.css'
import { rgbDataURL } from '../MDX'
import { wrap } from 'popmotion'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}
	},
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) =>
	Math.abs(offset) * velocity

const images = [
	{
		alt: 'Auckland Skytower',
		link: '/photos/auckland.jpg',
		color: rgbDataURL(131, 140, 155),
	},
]

const Photos: FC = () => (
	<div className={styles.gallery}>
		{images.map((image, index) => (
			<a
				href={image.link}
				target="_blank"
				rel="noreferrer"
				key={index}
				style={{ zIndex: index, marginTop: index % 2 === 0 ? -10 : 10 }}
				className="exclude"
			>
				<Image
					src={`/photos/${index + 1}.jpg`}
					width={265}
					height={325}
					alt={image.alt}
					draggable={false}
					priority
					placeholder="blur"
					blurDataURL={image.color}
				/>
			</a>
		))}
	</div>
)

export const Gallery: FC = () => {
	const [[page, direction], setPage] = useState([0, 0])

	const imageIndex = wrap(0, images.length, page)
	const paginate = (newDirection: number) =>
		setPage([page + newDirection, newDirection])

	return (
		<div className={styles.slides}>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={`/photos/${imageIndex + 1}.jpg`}
					alt={images[imageIndex].alt}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x)
						if (swipe < -swipeConfidenceThreshold) paginate(1)
						else if (swipe > swipeConfidenceThreshold) paginate(-1)
					}}
					loading="eager"
				/>
			</AnimatePresence>
			<button
				className={styles.next}
				onClick={() => paginate(1)}
				aria-label="Next"
			>
				<FiChevronRight />
			</button>
			<button
				className={styles.prev}
				onClick={() => paginate(-1)}
				aria-label="Back"
			>
				<FiChevronRight />
			</button>
		</div>
	)
}

export default Photos
