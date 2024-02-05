/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	swcMinify: false,
	devIndicators: {
		buildActivity: false,
	},
	// compiler: {
	// 	removeConsole: process.env.NODE_ENV === 'production',
	// },
	i18n: {
		locales: ['vi', 'zh-CN'],
		defaultLocale: 'vi',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://api-meapp.benhvien.tech/:path*',
			},
		];
	},
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			net: false,
			dns: false,
			child_process: false,
			tls: false,
		};

		return config;
	},
};

module.exports = nextConfig;
