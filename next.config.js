module.exports = {
  reactStrictMode: false,
  //distDir: 'build',
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: "javascript/auto",
      loader: "file-loader",
      options: {
        emitFile: isServer,
        publicPath: `/_next/static/`,
        outputPath: `${isServer ? "../" : ""}static/`,
        name: "[path]yolo-pago-[name].[ext]",
      },
    });
    
    return config;
  },
};
