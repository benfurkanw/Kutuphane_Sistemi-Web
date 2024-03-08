const express = require('express');
const router = express.Router()

const accountController = require('../controllers/account');

router.get('/login' , accountController.getLogin);
router.post('/login' , accountController.postLogin);

router.get('/logout' , accountController.getlogout);

router.get('/register' , accountController.getRegister);
router.post('/register' , accountController.postRegister);

module.exports = router;