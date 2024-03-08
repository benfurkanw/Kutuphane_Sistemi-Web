const connection = require('../utility/database')

module.exports = class Users {
    
    constructor(isim, soyisim, username, password, mail) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.username = username;
        this.password = password;
        this.mail = mail;
    }

    saveUser() {
            return connection.execute(
                'INSERT INTO users (isim, soyisim, username, password, mail) VALUES (?, ?, ?, ?, ?)',
                [this.isim, this.soyisim, this.username, this.password, this.mail]
            );
    }

    static getAll() {
        return connection.execute('SELECT * FROM users');
    }

    static async getByEmailAndPassword(email, password) {
        try {
          const [user] = await connection.execute('SELECT * FROM users WHERE mail = ? AND password = ?', [email, password]);
          return user;
        } catch (error) {
          throw error;
        }
    }

    static async DeleteById(id){
        return connection.execute('DELETE FROM users WHERE id=?' , [id]);
    }

    static async getbyuser(username){
        return connection.execute('SELECT * FROM users WHERE username=?' , [username]);
    }
}

