/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Allow custom HTML attributes
    if (!isServer) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
    }

    return config;
  },
};

export default nextConfig;
