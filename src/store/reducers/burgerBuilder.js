import * as actions from '../actions/actions';
import { updateObject } from '../../utils/store';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredient = (state, action) => {
  const ingredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, ingredient);
  const newState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  };

  return updateObject(state, newState);
};

const removeIngredient = (state, action) => {
  const ingredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] -1
  };
  const updatedIngredients = updateObject(state.ingredients, ingredient);
  const newState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  };

  return updateObject(state, newState);
};

const setIngredients = (state, action) => {
  return {
    ...state,
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: initialState.totalPrice,
    error: false
  }
};

const fetchIngredientsFailed = (state, action) => {
  return {
    ...state,
    error: true
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actions.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actions.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actions.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }

  return state;
};

export default reducer;
