const connection = require('../utility/database')

module.exports = class Users {
    
    constructor(kitapisim, kitapyazar, alanisim, alansoyisim, alınantarih, iadetarih) {
        this.kitapisim = kitapisim;
        this.kitapyazar = kitapyazar;
        this.alanisim = alanisim;
        this.alansoyisim = alansoyisim;
        this.alınantarih = alınantarih;
        this.iadetarih = iadetarih;
    }

    saveIslem() {
            return connection.execute(
                'INSERT INTO kitapislem (kitapisim, kitapyazar, alanisim, alansoyisim, alınantarih, iadetarih) VALUES (?, ?, ?, ?, ?, ?)',
                [this.kitapisim, this.kitapyazar, this.alanisim, this.alansoyisim, this.alınantarih, this.iadetarih]
            );
    }

    static getAll() {
        return connection.execute('SELECT * FROM kitapislem');
    }
    
}