const User = require('../models/users');
const Book = require('../models/books');
const Islemler = require('../models/islemler')

exports.getAddUser = (req,res,next) => {
    User.getAll()
    .then((users) => {
        res.render('admin/adminpanel1' , 
        {
            path : 'admin/adminpanel1',
            users: users[0],
    
        });
    }).catch((err) => {
        console.log(err);
    });

};

exports.getAdminPanel2 = (req,res,next) => {
    const userId = req.session.userId;
    const username = req.session.username;
    const isim = req.session.isim;
    const soyisim = req.session.soyisim;
    const email = req.session.email;
    const password = req.session.password;

    res.render('admin/adminpanel2' ,{
        path : '/adminpanel2',
        isAuthenticated: req.session.isAuthenticated,
        username: username,
        userId: userId,
        isim: isim,
        soyisim: soyisim,
        email: email,
        password: password
    });
};

exports.postDeleteProduct = (req,res,next) => {
    User.DeleteById(req.body.productid)
        .then(() => {
            res.redirect('/admin/adminpanel?action=delete');
        }).catch((err) => {
            console.log(err);
        });
    
};

exports.postaddbook = async (req,res,next) => {
    const book = new Book();

    book.kitapisim = req.body.kitapisim;
    book.kitapresim = req.body.kitapresim;
    book.kitapaciklama = req.body.kitapaciklama;
    book.kitapyazar = req.body.kitapyazar;

    book.saveBooks()
        .then(() => {
            res.redirect('/kitaplik');
        }).catch((err) => {
            console.log(err);
    });
};

exports.getkitapeklemesayfasi = async (req,res,next) => {
    res.render('admin/addbookpage' , {
        path : 'admin/kitapeklemesayfasi'
    })
};

exports.getKitaplar = async (req, res, next) => {
    try {
        const [rows] = await Islemler.getAll();
        res.render('admin/adminpanel3', { books: rows });
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu.');
    }
};

exports.adminlogin = (req,res,next) => {

    res.render('admin/adminlogin' ,{
        path : 'admin/adminlogin',
    });
};

exports.showLoginPage = (req, res) => {

    res.render('admin/adminpanel' ,{
        path : 'adminpanel',
    });
};
  
exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'kartepe41') {
      res.redirect('adminpanel')
    } else {
      res.send('Hatalı kullanıcı adı veya şifre. Tekrar deneyin.');
    }
  };
  






