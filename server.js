var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:8000",
        "Access-Control-Allow-Credentials": "true"
    },
    hot: true,
    inline: true,
    historyApiFallback: true
}).listen(3000, '0.0.0.0', function(err, result) {
    if(err) {
        console.log(err)
    }
    console.log('Listening at 0.0.0.0:3000')
})