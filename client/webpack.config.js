const 
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	autoprefixer = require('autoprefixer')

module.exports = {
	entry: {
		bundle: './src/index.js',
	},
	output: {
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: { minimize: true }
				}
			},
			{
				test: /.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader?modules&localIdentName=[local]__[name]__[hash:base64:5]&minimize&sourceMap',
					{
						loader: 'postcss-loader',
						options: {
							autoprefixer: {
								browser: ['last 2 versions']
							},
							sourceMap: true,
							plugins: () => [autoprefixer]
						}
					},
					'resolve-url-loader',
					'sass-loader?outputStyle=compressed&sourceMap'
				]
			},
			{
				test: /\.(png|jpe?g|svg|webp|gif)$/,
				exclude: /node_modules/,
				use: 'file-loader?name=assets/[name].[ext]'
			}
		]
	},
	devServer: {
		historyApiFallback: true, 
	},
	plugins: [
		new CleanWebpackPlugin(['dist/**/*.*']),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css',
			chunkFilename: '[id].css'
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			filename: 'index.html',
			chunks: ['bundle']
		})
	]
}