import styles from './index.module.css'

export default function Marquee({ text }) {
	return (
		<div className={styles.marquee}>
			<span className={styles.marqueecontent}>{text}</span>
			<span className={styles.marqueecontent}>{text}</span>
		</div>
	)
}
