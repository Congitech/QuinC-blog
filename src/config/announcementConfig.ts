import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "📢 欢迎来访者",

	// 公告内容
	content:
		"👋🏻 Hi，我是 QuinC，欢迎来到我的博客！这里记录 CTF、网络安全与技术折腾。",

	// 是否允许用户关闭公告
	closable: false,

	links: [
		{
			// 启用链接
			enable: true,
			// 链接文本
			text: "了解更多",
			// 链接 URL
			url: "/about/",
			// 内部链接
			external: false,
		},
		{
			// 启用链接
			enable: true,
			// 链接文本
			text: "开源地址",
			// 链接 URL
			url: "https://github.com/Congitech/QuinC-blog",
			// 外部链接
			external: true,
		},
	],
};
