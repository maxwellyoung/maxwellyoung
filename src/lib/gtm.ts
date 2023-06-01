export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

declare global {
	interface Window {
		dataLayer: any[] // Adjust the type as per your dataLayer structure
	}
}

export const pageview = (url: string) => {
	window.dataLayer = window.dataLayer || []
	window.dataLayer.push({
		event: 'pageview',
		page: url,
	})
}
