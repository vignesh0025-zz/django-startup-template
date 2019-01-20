module.exports = {
    syntax: 'postcss-scss', 
    /* 
    This plugin simply performs PostCSS actions to scss syntax
    and does not compile SCSS to CSS
    */
    plugins: [
        require('autoprefixer')
    ]
}