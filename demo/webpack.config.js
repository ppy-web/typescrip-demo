const path = require('path');

// 插件引入
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 非默认需要使用{}引入

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false
    }
  },
  // webpack 打包时要使用的模块
  module: {
    // 指定loader规则
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设定预定义环境
              presets:[
                [
                  // 指定环境
                  "@babel/preset-env",
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      'chrome': '58',
                      'ie': '11'
                    },
                    // 指定corejs版本
                    'corejs': '3',
                    // 按需加载
                    'useBuiltIns': 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node-modules/,
      },
      // 设置less的文件处理
      {
        test: /\.less$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options:{
              postcssOptions:{
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }

  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: '自定义title'
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],

  // 设置哪些文件可以作为模块引用
  resolve: {
    extensions: ['.ts', '.js']
  }
}