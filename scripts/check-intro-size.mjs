
const dir = "public/assets/images/home-truncated";
const files = readdirSync(dir)
	.filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
	.sort();

console.log("file\twidth\theight\tratio\tKB");
for (const file of files) {
	const p = join(dir, file);
	try {
		const meta = await sharp(p).metadata();
		const ratio = (meta.width / meta.height).toFixed(2);
		console.log(
			`${file}\t${meta.width}\t${meta.height}\t${ratio}\t${Math.round(
				statSync(p).size / 1024,
			)}`,
		);
	} catch (e) {
		console.log(`${file}\t读取失败: ${e.message}`);
	}
}
