const webpack = require('webpack');
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({mode, presets} = {mode: "production", presets:[]}) => {

    return webpackMerge.merge({
            mode,
            
            plugins: [
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode),
        presets ?  presetConfig({mode,presets}) : {}
        )
};