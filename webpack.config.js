const path= require('path')
const HTMLWebpackPlugin= require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MINICSSExtractPlugin= require('mini-css-extract-plugin');
const { clear } = require('console');



const preProcess=(extra)=>{
    const baseBuild=[
        {
            loader: MINICSSExtractPlugin.loader, 
            options: {
                hmr: true,
                realodAll: true
            }
        
        },
        'css-loader'
    ]

    if(extra){
        baseBuild.push(extra)
    }
    return baseBuild  
}

const babelOptions=(extra)=>{
    const baseOptions=
    {
        presets: [
        '@babel/preset-env'
        ],
        plugins:[
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if(extra){
        baseOptions.presets.push(extra)
    }

    return baseOptions
}

module.exports={

    entry: {
        main: ['@babel/polyfill','./src/index.jsx']
    },
    mode: 'development',
    output:{
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization:{  
        splitChunks:{ 
            chunks: 'all'
        }
    },
    devServer:{
        port:4200,
        hot:true
    },
    plugins:[
        new HTMLWebpackPlugin({
           template: 'index.html' 
        }),
        new CleanWebpackPlugin(),
        new MINICSSExtractPlugin({
            filename:'[name].[hash].bundle.css'
        })
    ],
    module:{
        rules:[

            {
                test:/\.css$/,
                use:preProcess()
            },
            {
                test:/\.s[ac]ss$/,
                use:preProcess('sass-loader')
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use:['file-loader']
            },
            {
                test:/\.(ttf)$/,
                use:['file-loader']
            },
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader',
                        options:babelOptions()
                }
            },
            
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader',
                        options:babelOptions( '@babel/preset-react')
                }
            }
        ]
    }
}