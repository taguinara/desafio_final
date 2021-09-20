const Lista = require('../models/lista')

module.exports = app => {
    app.get('/lista', (req, res) => {
        Lista.lista(res)
    })

    app.get('/lista/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Lista.buscaPorId(id, res);
    })

    app.post('/lista', (req, res) => {
        const lista = req.body
        
        Lista.adiciona(lista, res)
    })

    app.patch('/lista/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
    
        Lista.altera(id, valores, res)
    })
}
