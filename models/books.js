const connection = require('../utility/database');

module.exports = class Books {

    constructor(kitapisim, kitapresim, kitapaciklama, kitapyazar) {
        this.kitapisim = kitapisim;
        this.kitapresim = kitapresim;
        this.kitapaciklama = kitapaciklama;
        this.kitapyazar = kitapyazar;

    }

    saveBooks() {
        return connection.execute('INSERT INTO books (kitapisim,kitapresim,kitapaciklama,kitapyazar) VALUES (?,?,?,?)' , [this.kitapisim, this.kitapresim, this.kitapaciklama, this.kitapyazar]);
    }

    static getAllBooks() {
        return connection.execute('SELECT * FROM books');
    }

    static getBookByTitle(kitapisim) {
        return connection.execute('SELECT * FROM books WHERE kitapisim = ?', [kitapisim]);
    }
}