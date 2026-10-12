import type { AnalyticsConfig } from "../types/analyticsConfig";

export const analyticsConfig: AnalyticsConfig = {
	// Add your own analytics IDs and URLs here when you deploy the site.
	googleAnalyticsId: "",
	microsoftClarityId: "",
	umamiAnalytics: {
		websiteId: "67934a32-e1f0-4819-b12b-782ee070138a",
		scriptUrl: "https://cloud.umami.is/script.js",
		// 官方 Cloud 不需要反代，留空即可
		hostUrl: "",
		shareId: "SrdL9mFmRTDji3LT",
		shareApiBase: "https://cloud.umami.is",
		historicalStats: {
			visitors: 0,
			pageviews: 0,
		},
		showPageViews: false,
		showSiteStats: false,
		replaysScriptUrl: "",
		trackOutboundLinks: false,
		collectWebVitals: false,
		replays: {
			enabled: false,
			sampleRate: 0,
			maskLevel: "strict",
			maxDuration: 0,
			blockSelector: "",
		},
	},
	la51Analytics: {
		Id: "",
		sdkUrl: "",
		ck: "",
		autoTrack: false,
		hashMode: false,
		screenRecord: false,
	},
};