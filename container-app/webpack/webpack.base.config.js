const htmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = ({ env }) => {
  return {
    devServer: {
      historyApiFallback: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              envName: env,
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader",
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: "images/[hash]-[name].[ext]",
          },
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new ModuleFederationPlugin({
        name: "Container",
        filename: "remoteEntry.js",
        remotes: {
          ContactUsApp: "ContactUsApp@http://localhost:3001/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: "17.0.2",
          },
          "react-dom": {
            singleton: true,
            requiredVersion: "17.0.2",
          },
        },
      }),
    ],
  };
};
