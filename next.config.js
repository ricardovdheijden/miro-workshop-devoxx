// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     runtime: "nodejs",
//     serverComponents: true,
//   },
// };

// module.exports = nextConfig;

module.exports = {
  experimental: {
    runtime: "edge", // run backend closer to user
    serverComponents: true,
  },
};
