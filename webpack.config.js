const path =require('path');

module.exports = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    entry: './src/scripts/main.ts',
    plugins: [
    ],
    /*entry: './src/index.ts',*/
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { /* Loader options go here */ }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
};
