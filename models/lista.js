const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Lista{
    adiciona(lista, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(lista.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const listaDatado = {...lista, dataCriacao, data}

        const sql = 'INSERT INTO Lista SET ?'

        conexao.query(sql, listaDatado, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Lista'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Lista WHERE id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            const lista = resultados[0];

            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(lista);
            }
        })
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(lista.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Lista SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Lista
