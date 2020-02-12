const path = require('path');
let prod = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    eslint: true,
    wpyExt: '.wpy',
    build: {
        web: {
            apis: ['showToast', 'showActionSheet', 'showModal'],
            components: ['navigator', 'button', 'icon', 'progress', 'slider', 'radio', 'radio-group', 'checkbox', 'checkbox-group', 'switch'],
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: {
            '@': resolve('src')
        },
        aliasFields: ['wepy', 'weapp'],
        modules: ['node_modules']
    },
    appConfig: {
        baseUrl: prod ? 'https://a.rsd123.com/' : 'http://tiantianxsg.com:39888/'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader'
        }]
    },
    compilers: {
        less: {},
        babel: {
            sourceMap: true,
            presets: [
                'es2015',
                'stage-1'
            ],
            plugins: [
                'transform-decorators-legacy',
                'transform-export-extensions',
                // 'syntax-export-extensions',
                // 'babel-plugin-transform-class-properties',
                'transform-class-properties',
                'transform-object-rest-spread'
            ]
        }
    }
};
if (prod) {
    delete module.exports.compilers.babel.sourcesMap;
    // 压缩less
    module.exports.compilers['less'] = {
        compress: true
    }
    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {}
        },
        imagemin: {
            filter: /\.(jpg|png|jpge)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
