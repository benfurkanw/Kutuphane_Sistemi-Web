const User = require('../models/users');

exports.getLogin = (req,res,next) => {
    res.render('main/home' , {
        path: '/login' , 
        title: 'Login'
    });
}

exports.postLogin = async (req, res, next) => {
    const email = req.body.mail;
    const password = req.body.password;
  
    try {
      const user = await User.getByEmailAndPassword(email, password)
      console.log('Kullanıcı:', user);
  
      if (user.length > 0) {
        const username = user[0].username;
        const userId = user[0].id;
        const email = user[0].mail;
        const isim = user[0].isim;
        const soyisim = user[0].soyisim;
        const password = user[0].password;

        req.session.username = username;
        req.session.userId = userId;
        req.session.isAuthenticated = true
        req.session.email = email;
        req.session.isim = isim;
        req.session.password = password;
        req.session.soyisim = soyisim;
  
        res.redirect(`/userhome?userId=${userId}`);
      } else {
        res.send('Yanlış E-posta veya Şifre');
      }
    } catch (error) {
      console.error('Veritabanı Hatası:', error);
      res.send('Bir hata oluştu.');
    }
};

exports.getRegister = (req,res,next) => {
        User.getAll()
        .then((users) => {
            res.render('/register' , 
            {
                users: users[0],
            });
        }).catch((err) => {
            console.log(err);
        });

};

exports.postRegister = (req,res,next) => {
    const user = new User();

    user.isim = req.body.isim;
    user.soyisim = req.body.soyisim;
    user.username = req.body.username;
    user.password = req.body.password;
    user.mail = req.body.mail ;

    user.saveUser()
        .then(() => {
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
    });
}

exports.getlogout = (req,res,next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/')
    })
}