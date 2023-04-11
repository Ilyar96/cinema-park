/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"api.kinopoisk.dev",
			"firebasestorage.googleapis.com",
			"st.kp.yandex.net",
		],
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;
