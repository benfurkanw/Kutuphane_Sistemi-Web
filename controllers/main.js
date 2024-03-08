const Books = require('../models/books'); 
const User = require('../models/users');
const Islemler = require('../models/islemler')
const moment = require('moment');


exports.gethome = (req,res,next) => {
    const username = req.session.username;
    
    res.render('main/home' ,{
        path : '/',
        isAuthenticated: req.session.isAuthenticated,
        username: username
    });
};

exports.getuserhome = (req,res,next) => {

    console.log(req.session.isAuthenticated);
    console.log(req.session.email);
    console.log(req.session.username);
    const username = req.session.username;
    res.render('main/userhome' ,{
        path : '/kullanicioturumu',
        isAuthenticated: req.session.isAuthenticated,
        username: username
    });
};

exports.gethakkımda = (req,res,next) => {

    res.render('main/hakkimda' ,{
        path : '/hakkimda',
    });
};

exports.getKullanıcıSayfası = (req,res,next) => {
    const userId = req.session.userId;
    const username = req.session.username;
    const isim = req.session.isim;
    const soyisim = req.session.soyisim;
    const email = req.session.email;
    const password = req.session.password;

    res.render('main/userprofile' ,{
        path : '/userprofile',
        isAuthenticated: req.session.isAuthenticated,
        username: username,
        userId: userId,
        isim: isim,
        soyisim: soyisim,
        email: email,
        password: password
    });
};

exports.getkronometre = (req,res,next) => {

    res.render('main/kronometre' ,{
        path : '/kronometre',
    });
};

exports.getBooks = async (req, res, next) => {
    try {
        const [rows] = await Books.getAllBooks();
        req.session.books = rows; // Kitap verilerini oturum verisine atar
        res.render('main/kitaplık', { books: rows });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
};

exports.getBooksDetay = async (req, res, next) => {
    try {
        const kitapisim = req.params.kitapisim;
        const book = await Books.getBookByTitle(kitapisim);
        req.session.book = book;
        console.log(book[0]);

        res.render('main/kitapdetay', {
            path: '/kitapdetay',
            book: book[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
};

exports.postKitapAl = async (req, res, next) => {
    console.log("başarılı 0")
    const username = req.session.username;
    console.log(username);
    console.log("başarılı 1");
    const kitapisim = req.session.book[0][0].kitapisim;
    console.log(kitapisim);

    try {
        console.log("başarılı 2");
        const user = await User.getbyuser(username);
        console.log("başarılı 3");
        const book = await Books.getBookByTitle(kitapisim);
        console.log("başarılı 4");

        if (user && book) {
            const alınantarih = moment().format('YYYY-MM-DD HH:mm:ss');
            console.log(alınantarih);
            console.log("başarılı 5");
            const iadetarih = moment(alınantarih).add(14, 'days').format('YYYY-MM-DD HH:mm:ss');
            console.log(iadetarih);
            console.log("başarılı 6");

            const islem = new Islemler(
                book[0][0].kitapisim,
                book[0][0].kitapyazar,
                user[0][0].isim,
                user[0][0].soyisim,
                alınantarih,
                iadetarih,
            );

            console.log("başarılı 7");

            await islem.saveIslem();
            
            console.log("başarılı 8");

            res.redirect('/kitaplik'); // Kitaplık sayfasına yönlendir
        } else {
            res.status(404).send('Kullanıcı veya kitap bulunamadı.');
            console.log("başarılı 9");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu.');
        console.log("başarılı 10");
    }
};






