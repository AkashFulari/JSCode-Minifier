# JSCode-Minifier
This repository contains a JavaScript Code Minifier example. Follow these steps to minify your JavaScript code.

### 1. Clone the Repository
Clone this repository using the following command:

    git clone https://github.com/AkashFulari/JSCode-Minifier.git


### 2. Initialize the Project and Install Dependencies
Initialize a new npm project and install the necessary dependencies:

    npm install

### 3. Add Your JS File
To minify your JavaScript code file, replace scripts/script.js with YOUR_JS_FILE.JS. Add your JavaScript code content into YOUR_JS_FILE.JS.

### 4. Configuration
Create a configuration file named webpack.config.js in your current git repository and add the following content:

    // webpack.config.js
    const path = require('path');
    const TerserPlugin = require('terser-webpack-plugin');

    module.exports = {
        entry: './src/index.js', // replace your script file absolute location here
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-library.min.js', // replace your export library file name here
            library: 'MyLibrary', // replace export library name here
            libraryTarget: 'umd',
            globalObject: 'this',
        },
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [
            new TerserPlugin({
                terserOptions: {
                mangle: true, // Mangle variable and function names
                },
            }),
            ],
        },
    };

### 5. Minify Your Code/Library
To minify your library or code, use the following command:

    npx webpack --config webpack.config.js

This will generate a minified and obfuscated version of your library in the `dist` directory.

### 6. Test Your Mibified Library/Code
Create an index.html file to include your minified library and use the exported class.

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Player Library</title>
    </head>
    <body>
    <script src="dist/my-library.min.js"></script>
    <script>
        // Access the exported class from the MyLibrary global object
        const conetnt = new MyLibrary.dispalyMessage();
        console.log(content);
    </script>
    </body>
    </html>

Open the `index.html` file in a web browser. You should see the console log as your `displayMessage` content.

 **THANK YOU!!!.**