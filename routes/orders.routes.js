const express = require('express');

const {
  createOrder,
  findAllOrderUser,
  updateOrder,
  deleteOrder,
} = require('../controller/orders.controller');

const authMiddleware = require('../middlewares/auth.middleware');
const validOrder = require('../middlewares/orders.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.post('/', createOrder);

router.get('/me', findAllOrderUser);

router
  .route('/:id')
  .patch(validOrder.validIfExistOrder, updateOrder)
  .delete(validOrder.validIfExistOrder, deleteOrder);

module.exports = router;
