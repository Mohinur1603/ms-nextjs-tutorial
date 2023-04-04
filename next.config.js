/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["media.graphassets.com", "assets.publishing.service.gov.uk"],
	},
};

module.exports = nextConfig
