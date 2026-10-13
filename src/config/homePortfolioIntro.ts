/**
 * 首页开屏动画配置。
 *
 * 开屏每次进入首页时从 themes 里随机挑一套展示，主题自带
 * 「文字 + 立绘 + 上下快门横幅」，因此不需要在设置面板里手动选择。
 * 访客只保留「是否播放开屏」这一个偏好，存在自己的浏览器里。
 *
 * 新增主题：复制 themes 里的一项，换好 id / 文字 / 图片路径即可。
 * 桌面端与移动端横幅是两套独立资源，都要准备。
 */

export type HomePortfolioIntroCharacter = {
	id: string;
	label: string;
	src: string;
	thumbnail: string;
};

export type HomePortfolioIntroBanner = {
	id: string;
	label: string;
	src: string;
};

export type HomePortfolioIntroTheme = {
	id: string;
	label: string;
	/** 开屏中央的大字，左右各一个词 */
	title: {
		left: string;
		right: string;
	};
	character: HomePortfolioIntroCharacter;
	banners: {
		desktop: {
			top: HomePortfolioIntroBanner;
			bottom: HomePortfolioIntroBanner;
		};
		mobile: {
			top: HomePortfolioIntroBanner;
			bottom: HomePortfolioIntroBanner;
		};
	};
};

export const homePortfolioIntroSettings: {
	enabledStorageKey: string;
	defaultEnabled: boolean;
	randomizeTheme: boolean;
	themes: HomePortfolioIntroTheme[];
} = {
	enabledStorageKey: "rainzt.home-portfolio-intro-enabled.v1",
	defaultEnabled: true,
	/** 每次进入首页随机切换主题；关掉则始终使用第一套 */
	randomizeTheme: true,
	themes: [
		{
			id: "wuthering",
			label: "鸣潮",
			title: {
				left: "鸣潮",
				right: "往复",
			},
			character: {
				id: "character-03",
				label: "千咲",
				src: "/assets/images/home-truncated/character-03.webp",
				thumbnail: "/assets/images/home-truncated/character-03.webp",
			},
			banners: {
				desktop: {
					top: {
						id: "wuthering",
						label: "千咲",
						src: "/assets/images/home-truncated/intro-banner-top-wuthering.webp",
					},
					bottom: {
						id: "wuthering",
						label: "千咲爱弥斯菲比",
						src: "/assets/images/home-truncated/intro-banner-bottom-wuthering.webp",
					},
				},
				mobile: {
					top: {
						id: "wuthering",
						label: "千咲",
						src: "/assets/images/home-truncated/intro-banner-mobile-top-wuthering.webp",
					},
					bottom: {
						id: "wuthering",
						label: "千咲爱弥斯菲比",
						src: "/assets/images/home-truncated/intro-banner-mobile-bottom-wuthering.webp",
					},
				},
			},
		},
		// 原神 · 胡桃
		{
			id: "genshin",
			label: "原神",
			title: {
				left: "原神",
				right: "NB",
			},
			character: {
				id: "character-genshin",
				label: "胡桃",
				src: "/assets/images/home-truncated/character-genshin.webp",
				thumbnail: "/assets/images/home-truncated/character-genshin.webp",
			},
			banners: {
				desktop: {
					top: {
						id: "genshin",
						label: "胡桃",
						src: "/assets/images/home-truncated/intro-banner-top-genshin.webp",
					},
					bottom: {
						id: "genshin",
						label: "胡桃",
						src: "/assets/images/home-truncated/intro-banner-bottom-genshin.webp",
					},
				},
				mobile: {
					top: {
						id: "genshin",
						label: "胡桃",
						src: "/assets/images/home-truncated/intro-banner-mobile-top-genshin.webp",
					},
					bottom: {
						id: "genshin",
						label: "胡桃",
						src: "/assets/images/home-truncated/intro-banner-mobile-bottom-genshin.webp",
					},
				},
			},
		},
		{
			id: "hsr",
			label: "崩坏：星穹铁道",
			title: {
				left: "愿此行",
				right: "终抵群星",
			},
			character: {
				id: "character-silverwolf",
				label: "银狼",
				src: "/assets/images/home-truncated/character-silverwolf.webp",
				thumbnail: "/assets/images/home-truncated/character-silverwolf.webp",
			},
			banners: {
				desktop: {
					top: {
						id: "hsr",
						label: "银狼",
						src: "/assets/images/home-truncated/intro-banner-top-hsr.webp",
					},
					bottom: {
						id: "hsr",
						label: "银狼",
						src: "/assets/images/home-truncated/intro-banner-bottom-hsr.webp",
					},
				},
				mobile: {
					top: {
						id: "hsr",
						label: "银狼",
						src: "/assets/images/home-truncated/intro-banner-mobile-top-hsr.webp",
					},
					bottom: {
						id: "hsr",
						label: "银狼",
						src: "/assets/images/home-truncated/intro-banner-mobile-bottom-hsr.webp",
					},
				},
			},
		},
	],
};

export type HomePortfolioIntroThemeId =
	(typeof homePortfolioIntroSettings.themes)[number]["id"];
