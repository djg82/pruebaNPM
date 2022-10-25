var path = require('path')
const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		library: '@djg82/pruebanpmdjg.',
		libraryTarget: 'umd',
		publicPath: '/build/',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: "ts-loader"
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'react': path.resolve(__dirname, './node_modules/react'),
			'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
		}
	},
	plugins: [
		new DtsBundleWebpack({
			name: '@djg82/pruebanpmdjg.',
			main: 'src/index.d.ts',
			out: '../index.d.ts',
			removeSource: true,
		})
	],
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React"
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "ReactDOM",
			root: "ReactDOM"
		},
	}
};