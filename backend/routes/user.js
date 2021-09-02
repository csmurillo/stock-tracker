const express = require('express');
const { userId, stockId, accountUpdate, changePassword,addToStockHistory, stockHistory, dowjones, stockSearch, stock, stockPrice, stockNews } = require('../controller/user');
const { isAuth } = require('../controller/auth');
const verifyToken = require('../middleware/verify-token');

const router = express.Router();

router.put('/user/account/update/:userId',verifyToken, isAuth, accountUpdate);

router.put('/user/account/passwordChange/:userId',verifyToken, isAuth,changePassword);

router.put('/add/to/stock/history/:userId',verifyToken, isAuth, addToStockHistory);

router.get('/stock/history/:userId',verifyToken, isAuth, stockHistory);

router.get('/stock/dowjones',dowjones);

router.get('/stock/search',stockSearch);

router.get('/stock',stock);

router.get('/stock/price',stockPrice);

router.get('/stock/news', stockNews);

router.param("userId", userId);

module.exports = router;



