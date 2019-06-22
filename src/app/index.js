import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import App from './app';
import WithLocalStorage from './components/withLocalStorage';
import { createStructuredSelector } from 'reselect';



const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default WithLocalStorage(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
