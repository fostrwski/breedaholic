module.exports = {
  images: {
    domains: ["cdn2.thedogapi.com"],
  },
  generateBuildId: () => "build",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};
