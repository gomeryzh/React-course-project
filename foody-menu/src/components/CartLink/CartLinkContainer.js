import { connect } from 'react-redux';
import CartLink from './CartLink';
import { getCartProductsAmount } from '../../redux/modules/Cart/selectors';

const mapState = state => ({
  amount: getCartProductsAmount(state),
});

export default connect(mapState)(CartLink);
