const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // support import "./style.css";

module.exports = ({mode}) => {
    
    return {
        output: {
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [['@babel/preset-env',
                                        {
                                            "modules": false,
                                            "loose": false
                                        }
                            
                                        ],
                                        
                                        ['@babel/preset-react', 
                                            {"runtime": "automatic"}
                                    
                                        ]
                                    ],
                            "plugins": ["@babel/plugin-proposal-class-properties"]

                        },
                        
                    }
                },
                
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },

                {
                    test: /\.css$/,
                    use: mode == 'production'? [MiniCssExtractPlugin.loader, "css-loader"] :["style-loader", "css-loader"]
                },
                
                {
                    test: /\.(jpe?g|png|gif|mp3|ogg)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 5000
                            }
                        }
                    ]
                }                
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                inject: 'body'
            }),
            ...(mode == 'production'? [new MiniCssExtractPlugin()]: []) 
        ]
    };
}
    
