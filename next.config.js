module.exports = {
	// Other configuration options...
	async rewrites() {
		return [
			{
				source: '/resume',
				destination: '/resume.pdf',
			},
		]
	},
}
