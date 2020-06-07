var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE autor (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome text UNIQUE, 
            livro text, 
            preco INTERGER, 
            CONSTRAINT nome_unique UNIQUE (nome)
            )`,
        (err) => {
            if (err) {
                // Table already created
                db.run('DROP TABLE autor')
                var insert = 'INSERT INTO autor (nome, livro, preco) VALUES (?,?,?)'
                db.run(insert, ["Machado de Assis","Memórias Póstumas de Brás Cubas", 45])
                db.run(insert, ["Gilberto G. Pereira","Vida e Obra de James Baldwin", 60])
                db.run(insert, ["Marlon James","A Guerra dos Tronos Africanos", 50])
                db.run(insert, ["Cidinha da Silva","Narrativas de um lugar de fala", 30])
                console.log("Registrados-1");
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO autor (nome, livro, preco) VALUES (?,?,?)'
                db.run(insert, ["Machado de Assis","Memórias Póstumas de Brás Cubas", 45])
                db.run(insert, ["Gilberto G. Pereira","Vida e Obra de James Baldwin", 60])
                db.run(insert, ["Marlon James","A Guerra dos Tronos Africanos", 50])
                db.run(insert, ["Cidinha da Silva","Narrativas de um lugar de fala", 30])
                console.log("Registrados-2");
            }
        });  
    }
});


module.exports = db