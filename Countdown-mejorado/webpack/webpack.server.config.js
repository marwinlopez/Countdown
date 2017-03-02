module.exports = {
    entry: './sources/main.js',//Cual es la entrada de nuestra apicación
    output: {
        path: '/built/server/',//donde colocará los archivos al terminar
        filename: 'index.js' //el nombre de nuestro bundle
    },
    devServer: {//opciones para el servidor de desarrollo
        inline: true, // para que se recargue cuando cambie el archivos
        port: 3000 //puerto donde funcionará el servidor
    },
    module:{
        loaders: [
            {
                test: /\.js$/, //probamos la extensión .js
                exclude: /node_modules/, //no queremos procesar los archivos en node_modules
                loader: 'babel-loader',//utilizamos babel
                query:{//cargamos los presets que instalamos
                    presets: ['es2015','react']
                }
            }
        ]
    }
};