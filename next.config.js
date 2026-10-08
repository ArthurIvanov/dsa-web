/** @type {import('next').NextConfig} */

const basePath = process.env.GITHUB_PAGES === "true" ? "/dsa-web" : "";

module.exports = {
	compiler: {
		styledComponents: true,
	},
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath,
	assetPrefix: basePath || undefined,
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
};
