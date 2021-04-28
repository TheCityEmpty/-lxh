const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CalcSameClassNamePlugin = require('./calc-same-classname-plugin.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const handleHtmlFn = require('./html-loader-preprocessor.js')
const webpack = require('webpack')
const path = require('path')
const {
  pages,
  env,
  APP__GLOBAL__VAR_DEV,
  APP__GLOBAL__VAR_PRD,
  GlobalCSSVar,
  GlobalCSSVarOptions
} = require('./config.js')

const entryObj = {}
const htmlArr = []

pages.forEach(i => {
  htmlArr.push(new HtmlWebpackPlugin({
    filename: `${i}.html`,
    template: `./web/${i}.html`,
    chunks: [i]
  }))
  entryObj[i] = `./web/js/${i}.js`
})

module.exports = {
  entry: entryObj,
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js'
  },
  plugins: [
    ...htmlArr,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      APP__GLOBAL__VAR: JSON.stringify(env === 'prd' ? APP__GLOBAL__VAR_PRD : APP__GLOBAL__VAR_DEV)
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CalcSameClassNamePlugin()
  ],

  module: {
    rules: [{
        test: /\.(jpg|png|jpeg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'imgs/'
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          preprocessor: (content, loaderContext) => {
            return handleHtmlFn(content)
          }
        }
      }

    ]
  },

  devServer: {
    hot: true,
    open: true,
    openPage: `${pages[0]}.html`,
    before(app, server, compiler) {
      const watchFiles = ['.html', '.less'];

      compiler.hooks.done.tap('done', () => {
        const changedFiles = Object.keys(compiler.watchFileSystem.watcher.mtimes);

        if (
          this.hot &&
          changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
        ) {
          server.sockWrite(server.sockets, 'content-changed');
        }
      });
    }
  }
}

function isString(val) {
  return Object.prototype.toString.call(val) === '[object String]'
}
