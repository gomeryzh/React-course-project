import { connect } from 'react-redux';
import MenuFilter from './MenuFilter';
import { filterMenu } from '../../../modules/Menu/menuActions';
import { getFilter } from '../../../modules/Menu/menuSelector';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = {
  onChange: filterMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuFilter);
