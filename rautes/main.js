const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main')

router.get('/' , mainController.gethome);

router.get('/userhome' , mainController.getuserhome);

router.get('/userprofile' , mainController.getKullanıcıSayfası);

router.get('/kitaplik' , mainController.getBooks);

router.get('/kitapdetay/:kitapisim' , mainController.getBooksDetay);

router.get('/kronometre' , mainController.getkronometre);

router.post('/kitapal', mainController.postKitapAl);

module.exports = router;