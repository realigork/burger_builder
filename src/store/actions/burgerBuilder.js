import axios from '../../axios-orders';

import * as actions from './actions';

export const addIngredient = name => {
  return {
    type: actions.ADD_INGREDIENT,
    ingredientName: name
  }
};

export const removeIngredient = name => {
  return {
    type: actions.REMOVE_INGREDIENT,
    ingredientName: name
  }
};

export const setIngredients = ingredients => {
  return {
    type: actions.SET_INGREDIENTS,
    ingredients
  }
};

export const fetchIngredientsFailed = () => {
  return {
    type: actions.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get('/ingredients.json')
      .then(res => {
        dispatch(setIngredients(res.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  }
}