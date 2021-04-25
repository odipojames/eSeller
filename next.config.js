module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)$/,
      use: [
        defaultLoaders.babel,
        { loader: 'file-loader', options: {
          name(file) {
              if (process.env.NODE_ENV === 'development') {
                return '[path][name].[ext]';
              }
              return '[contenthash].[ext]';
            } } }
      ],
    });
    return config
  },
  webpackDevMiddleware: (config, options) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
};
