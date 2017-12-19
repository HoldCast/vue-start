module.exports={
	entry:'./main.js',

	output:{
		path:__dirname,
		filename:'build.js'
	},

	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],   //所有模式
                        //plugins: ['transform-runtime']
                    }
                }
            },
		]
	}
};