const { Router } = require('express')

const { getUsuario,
    postUsuario,
    putUsuario } = require('../../controllers/usuario.controller')

const router  = Router();

router.get('/', getUsuario )
router.post('/',postUsuario)
router.put('/:id',putUsuario)
  module.exports = router