const { response } = require('express')

const getUsuario = (req,res = response)=>{
    res.json({
        msg:'Get usuario - controller'
    })
}

const postUsuario = (req,res = response)=>{
    //const body = req.body
    const {nombre,edad} = req.body
    res.json({
        msg:'Post usuario - controller',
        nombre,
        edad
    })
}

const putUsuario = (req,res = response)=>{
    //const body = req.body
    const id = req.params.id
    res.json({
        msg:'Put usuario - controller',
        id
    })
}

const delUsuario = (req,res = response)=>{
    //const body = req.body
    const id = req.params.id
    res.json({
        msg:'Put usuario - controller',
        id
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    delUsuario
}