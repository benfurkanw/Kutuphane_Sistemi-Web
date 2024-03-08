const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')

router.get('/adminpanel1' , adminController.getAddUser);

router.get('/adminpanel2' , adminController.getAdminPanel2);

router.post('/delete-product' , adminController.postDeleteProduct);

router.post('/kitapeklemesayfasi' , adminController.postaddbook);

router.get('/kitapeklemesayfasi' , adminController.getkitapeklemesayfasi);

router.get('/adminpanel3', adminController.getKitaplar);

router.get('/adminlogin' , adminController.adminlogin);

router.get('/adminpanel' , adminController.showLoginPage);

router.post('/login', adminController.login);

module.exports = router;