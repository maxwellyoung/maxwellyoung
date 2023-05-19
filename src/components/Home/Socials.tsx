import type { FC } from 'react'

import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
	FaSpotify,
} from 'react-icons/fa'
import styles from '@css/home.module.css'

export const Socials: FC = () => {
	return (
		<div className={styles.socials}>
			{[
				{
					aria: 'GitHub',
					icon: FaGithub,
					href: 'https://github.com/maxwellyoung',
				},
				{
					aria: 'Twitter',
					icon: FaTwitter,
					href: 'https://twitter.com/internetmaxwell',
				},
				{
					aria: 'Linkedin',
					icon: FaLinkedin,
					href: 'https://nz.linkedin.com/in/maxwell-young-a55032125',
				},
				{
					aria: 'YouTube',
					icon: FaYoutube,
					href: 'https://www.youtube.com/@maxwell_young',
				},
				{
					aria: 'Instagram',
					icon: FaInstagram,
					href: 'https://www.instagram.com/maxwell_young',
				},

				{
					aria: 'Spotify',
					icon: FaSpotify,
					href: 'https://open.spotify.com/artist/5HONdRTLNvBjlD2LirKp0q',
				},
			].map((link, index) => (
				<a
					href={link.href}
					target="_blank"
					rel="noreferrer"
					className={styles.social}
					key={index}
					aria-label={link.aria}
				>
					<link.icon size={22} />
				</a>
			))}
		</div>
	)
}
