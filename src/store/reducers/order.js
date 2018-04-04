import * as actions from '../actions/actions';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  return {
    ...state,
    purchased: false
  };
};

const purchaseBurgerStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  }
  return {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  };
};

const purchaseBurgerFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

const fetchOrdersStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  };
};

const fetchOrdersFailed = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actions.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);

    case actions.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);

    case actions.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actions.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actions.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actions.FETCH_ORDERS_FAILED:
      return fetchOrdersFailed(state, action);

    default:
      return state;
  }

  return state;
};

export default reducer;
