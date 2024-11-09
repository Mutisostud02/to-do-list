const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {  
    mode: 'development',  
    entry: './src/index.js',  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
      },
      devtool: "eval-source-map",
      devServer: {
      watchFiles: ["./src/template.html"],
  },
      plugins: [
        new HtmlWebpackPlugin({
          title: "To-do-list",
          template: './src/template.html', 
        }),
      ],
 
    module: {  
      rules: [  
        {  
          test: /\.js$/,  
          exclude: /node_modules/,  
          use: {  
            loader: 'babel-loader',  
            options: {  
              presets: ['@babel/preset-env']  
            }  
          }  
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },

      ]  
    } 
  };
  