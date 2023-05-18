import type { FC } from 'react'
import {
	FiDribbble,
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi/index'
import { RiSnapchatLine } from 'react-icons/ri'
import { RxDiscordLogo } from 'react-icons/rx'
import styles from '@css/home.module.css'

export const Socials: FC = () => {
	return (
		<div className={styles.socials}>
			{[
				{
					aria: 'GitHub',
					icon: FiGithub,
					href: 'https://github.com/maxwellyoung',
				},
				{
					aria: 'Twitter',
					icon: FiTwitter,
					href: 'https://twitter.com/internetmaxwell',
				},
				{
					aria: 'Linkedin',
					icon: FiLinkedin,
					href: 'https://nz.linkedin.com/in/maxwell-young-a55032125',
				},
				{
					aria: 'YouTube',
					icon: FiYoutube,
					href: 'https://www.youtube.com/@maxwell_young',
				},
				{
					aria: 'Instagram',
					icon: FiInstagram,
					href: 'https://www.instagram.com/maxwell_young',
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
