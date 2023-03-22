const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devConfig = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		port: 3000,
		allowedHosts: path.join(__dirname, '../dist'),
	},
	plugins: [new ReactRefreshWebpackPlugin()],
	module: {
		rules: [
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /.(css|sass|scss)$/,
			},
		],
	},
};

module.exports = merge(common, devConfig);
