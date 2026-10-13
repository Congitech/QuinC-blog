/** 颜色表达更新性质与影响程度，按每条记录的主要变化人工标注。 */
export type BlogChangelogTone =
	| "major"
	| "feature"
	| "minor"
	| "fix"
	| "content";

export type BlogChangelogEntry = {
	date: string;
	version: string;
	displayDate: string;
	kind: string;
	title: string;
	summary: string;
	details: string[];
	tags: string[];
	tone: BlogChangelogTone;
};

/**
 * 博客本身的建设记录。
 * 自动上架工具公告留在 /changelog/，这里仅记录朝朝听雨站点的页面、内容、社区和部署变化。
 */
export const blogChangelogEntries: BlogChangelogEntry[] = [
	{
		date: "2026-10-13",
		version: "1.0.0",
		displayDate: "2026 年 10 月 13 日",
		kind: "公告",
		title: "QuinC 站点正式上线",
		summary:
			"以网络安全与 CTF 学习为主线的个人博客搭建完成，首批 7 篇文章同步上线。",
		details: [
			"站点定位为公开笔记，用来整理学习与折腾的过程，目前主要写 CTF WriteUp 和技术笔记",
			"首批上线 7 篇文章，覆盖 RCE-labs 各关卡 WriteUp、新生赛 WriteUp 以及建站记录",
			"基于 Astro 7 与 Svelte 构建，使用 TypeScript 约束，部署在 Cloudflare Workers",
			"内容浏览支持归档、分类、标签三种维度，并提供站内搜索",
			"订阅渠道提供 RSS 输出，附带订阅说明页方便复制地址",
			"站内提供关于页与动态表情页面",
		],
		tags: ["上线", "设计", "部署"],
		tone: "major",
	},
	{
		date: "2026-10-13",
		version: "0.9.1",
		displayDate: "2026 年 10 月 13 日",
		kind: "内容",
		title: "新增文章",
		summary:
			"把另外一个博客的文章搬了过来。",
		details: [
			"广为网安实验室新生赛wp",
			"RCE web学习",
		],
		tags: ["ctf", "导航", "web"],
		tone: "content",
	},
	{
		date: "2026-10-13",
		version: "0.9.0",
		displayDate: "2026 年 10 月 13 日",
		kind: "视觉",
		title: "接入自定义壁纸并精简首页装饰",
		summary:
			"新增 9 张自定义壁纸并接入轮播，同时移除首页 11 张角色贴纸，让首页背景更干净。",
		details: [
			"桌面端接入 5 张横版壁纸，接入移动端 4 张竖版壁纸",
			"全部图片转为 webp 并压缩，体积从 16.4MB 降到 1.48MB",
			"跳过 s6.jpeg，其内容与 s2.jpeg 完全重复",
			"移除首页 11 张角色贴纸，保留周年贴纸与顶部标语",
			"主色亮度下调，加深按钮与强调文字的对比度",
		],
		tags: ["视觉", "壁纸", "性能"],
		tone: "feature",
	},
	{
		date: "2026-10-13",
		version: "0.8.0",
		displayDate: "2026 年 10 月 13 日",
		kind: "修复",
		title: "RSS 订阅入口改为跳转说明页",
		summary:
			"原先点击 RSS 图标会直接打开 XML 源码，现改为跳转到订阅说明页。",
		details: [
			"侧边栏、移动端导航、首页壁纸区与页脚共 4 处入口改为指向 /rss/",
			"说明页提供一键复制订阅地址，避免手动选中长链接",
			"页面 head 中的 rel=alternate 仍保持指向 rss.xml，保证阅读器自动发现不受影响",
		],
		tags: ["RSS", "导航", "体验"],
		tone: "fix",
	},
	
];
