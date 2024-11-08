/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProduction ? 'https://seonm.github.io/' : '',
  images: {
    unoptimized: true,

    // loader: 'imgix',
    // path: isProduction ? 'https://seonm.github.io/':'localhost:3000',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // 옵션 추가 가능 (예: svgoConfig 설정 등)
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
