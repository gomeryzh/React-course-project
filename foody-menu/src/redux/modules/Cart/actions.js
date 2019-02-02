import { normalize } from 'normalizr';
import * as schemas from '../../schemas/Schemas';

export const actionTypes = {
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
  INCREMENT_PRODUCT_AMOUNT: 'cart/INCREMENT_PRODUCT_AMOUNT',
  DECREMENT_PRODUCT_AMOUNT: 'cart/DECREMENT_PRODUCT_AMOUNT',
  FETCH_DATA: 'FETCH_DATA',
  SELECT_PRODUCT: 'SELECT_PRODUCT',
};

export const fetchMenu = posts => {
  const normalizedPosts = normalize(posts, [schemas.ProductsSchema]);
  console.log(normalizedPosts);
  return {
    type: actionTypes.FETCH_DATA,
    payload: {
      ids: {
        posts: Object.keys(normalizedPosts.entities.posts),
        authors: Object.keys(normalizedPosts.entities.authors),
      },
      entities: normalizedPosts.entities,
    },
  };
};

export const selectProduct = id => ({
  type: actionTypes.SELECT_AUTHOR,
  payload: id,
});

export const addToCart = id => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id,
  },
});

export const removeFromCart = id => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const incrementProductAmount = id => ({
  type: actionTypes.INCREMENT_PRODUCT_AMOUNT,
  payload: {
    id,
  },
});

export const decrementProductAmount = id => ({
  type: actionTypes.DECREMENT_PRODUCT_AMOUNT,
  payload: {
    id,
  },
});
