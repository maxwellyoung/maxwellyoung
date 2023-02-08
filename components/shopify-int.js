import { createApp } from '@shopify/app-bridge'
import { shopifyApi, ApiVersion, BillingInterval } from '@shopify/shopify-api'
import { MemorySessionStorage } from '@shopify/shopify-api/session-storage/memory'
import { restResources } from '@shopify/shopify-api/rest/admin/2022-07'

const shopify = shopifyApi({
	apiKey: 'a5b9c73a032d74a222fef9f6a5fdc584',
	apiSecretKey: '2263b95bf51a2d4e15d2384f34f06184',
	scopes: ['read_products'],
	hostName: 'localhost:4321',
	hostScheme: 'http',
	apiVersion: ApiVersion.July22,
	isEmbeddedApp: true,
	sessionStorage: new MemorySessionStorage(),
	isPrivateApp: false,
	userAgentPrefix: 'Custom prefix',
	privateAppStorefrontAccessToken: 'f0ed0c8acacb43843c8dcd5695d72a00',
	customShopDomains: ['*.my-custom-domain.io'],
	billing: {
		'My plan': {
			amount: 5.0,
			currencyCode: 'USD',
			interval: BillingInterval.OneTime,
		},
	},
	logger: {
		log: (severity, message) => {
			myAppsLogFunction(severity, message)
		},
	},
	restResources,
})
