import { connect } from 'react-redux';
import CartView from './CartView';
import * as selecors from '../../redux/modules/Cart/selectors';
import * as actions from '../../redux/modules/Cart/actions';

const mapState = state => ({
  products: selecors.getCartProducts(state),
});

const mapDispatch = {
  removeFromCart: actions.removeFromCart,
  incrementProductAmount: actions.incrementProductAmount,
  decrementProductAmount: actions.decrementProductAmount,
};

export default connect(
  mapState,
  mapDispatch,
)(CartView);
