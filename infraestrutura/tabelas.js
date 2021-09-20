class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarLista()
    }

    criarLista() {
        const sql = 'CREATE TABLE Lista (id int NOT NULL AUTO_INCREMENT, nome varchar(100) NOT NULL, url text, data datetime NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Lista criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas