module.exports = {
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ],
    options: {
        loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
        }
    }
}