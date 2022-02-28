/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2020',
  },
  buildOptions: {
    out: 'docs',
    metaUrlPath: 'snowpack',
  },
};
