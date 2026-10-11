import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.webp",

	// 名字
	name: "QuinC",

	// 个人签名
	bio: "记录 CTF 与网络安全的折腾过程",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	// 下面只保留了 GitHub。想加回 Bilibili / 微信 / Email，
	// 照这个格式复制一份，把 name、icon、url 换成你自己的：
	//   { name: "Bilibili", icon: "simple-icons:bilibili", url: "https://space.bilibili.com/你的UID", showName: false },
	//   { name: "微信",     icon: "fa7-brands:weixin",       url: "copy:你的微信号",  showName: false },
	//   { name: "Email",    icon: "fa7-solid:envelope",      url: "copy:你的邮箱",    showName: false },
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Congitech",
			showName: false,
		},
	],
};
