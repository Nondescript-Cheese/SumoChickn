import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { Actions } from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
    navPress: (routeName) => {
      Actions[routeName]();
    },
  };
};

const HandleRoutes = connect(
  null,
  mapDispatchToProps
)(Navigation);

export default HandleRoutes;