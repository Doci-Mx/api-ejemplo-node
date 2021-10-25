const express = require('express')
const cors = require('cors')
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.urlUsuario='/api/usuarios'
        this.middlewares()
        //rutas de la aplicacion
        this.routes()
    }

    
    routes(){
        this.app.use(this.urlUsuario,require('./routes/user'))
    }

    middlewares(){
        this.app.use( cors() )
        this.app.use( express.json() )
        this.app.use( express.static('public'))
    }

    listen(){
        this.app.listen(this.port,() =>{
            console.log(`Escuchando ${this.port}`)
        })
    }
}

module.exports = Server