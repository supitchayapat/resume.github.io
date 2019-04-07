module.exports = {
    entry: './app.js',        // กำหนด entry point เป็น app.js
    output: {
        filename: 'bundle.js' // ตั้งชื่อไฟล์ output เป็น bundle.js
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],

            },
            
        ],
    },
};