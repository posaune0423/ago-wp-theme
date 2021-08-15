const path = require('path');
const { argv } = require('process');
const MODE = argv.mode;

/////////////////////// Plugins ///////////////////////
const TerserPlugin = require('terser-webpack-plugin'); // js optimization
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin'); // plugin for Vuetify
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  // Entry point (main js file)
  entry: './src/main.js',
  // Where to output bundle file
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/index.js'
  },
  mode: MODE,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 81920,
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Load common SCSS [ Vars & Mixins ]
              resources: './src/assets/styles/base.scss'
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // prevent error caused by @mdi/font
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            // to convert ES2019 to ES5
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~': path.resolve(__dirname, '/src'),
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new BrowserSyncPlugin({
      files: ['*.php', 'dist'],
      reloadDelay: 0,
      notify: {
        styles: {
          top: 'auto',
          bottom: '1rem',
          right: '1rem',
          left: 'auto',
          width: '200px',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          border: 'none',
          fontSize: '0.8rem',
          color: 'white',
          background: 'linear-gradient(to right, #92025f, #3b1e58)',
          boxShadow: '0 0 1rem rgba(0,0,0,0.5)'
        }
      }
    })
  ],
  // Minimize files if mode is production
  optimization: {
    minimizer:
      'production' === MODE
        ? []
        : [
            // Optimize js file
            new TerserPlugin({
              extractComments: 'all', // remove all comment
              terserOptions: {
                compress: { drop_console: true } // remove output of console.log
              }
            })
          ]
  },
  // Reload browser when html, css, js files is updated
  devServer: {
    publicPath: '/dist/',
    contentBase: '/dist/js',
    watchContentBase: true,
    open: true, // Autostart browser when the server is started
    host: '0.0.0.0',
    port: 8000,
    inline: true,
    hot: true
  },
  watchOptions: {
    poll: true
  }
};
