/** @type {import('next').NextConfig} */

// Custom domain (qualifine.ru) serves from site root — no basePath.
// Set GITHUB_PAGES=true only if deploying to arthurivanov.github.io/dsa-web without a custom domain.
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
