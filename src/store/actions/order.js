import * as actions from './actions';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actions.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData
  }
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actions.PURCHASE_BURGER_FAIL,
    error
  }
};

export const purchaseBurgerStart = () => {
  return {
    type: actions.PURCHASE_BURGER_START
  }
};

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then(res => {
        dispatch(purchaseBurgerSuccess(res.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  }
};

export const purchaseInit = () => {
  return {
    type: actions.PURCHASE_INIT
  }
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actions.FETCH_ORDERS_SUCCESS,
    orders
  }
};

export const fetchOrdersFailed = (error) => {
  return {
    type: actions.FETCH_ORDERS_FAILED,
    error
  }
};

export const fetchOrdersStart = () => {
  return {
    type: actions.FETCH_ORDERS_START
  }
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFailed(err));
      });
  }
};