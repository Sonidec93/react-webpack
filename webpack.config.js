const path = require('path');
const autoprefixer = require('autoprefixer');
const htmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    resolve: {
        extensions: ['.js']
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'src','index.html'),
            filename:'index.html',
            inject:'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader', options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader', options: {
                            indent: 'postcss',
                            plugins: () => [autoprefixer()]
                        }
                    },
                    
                ]
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader:'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    }
}