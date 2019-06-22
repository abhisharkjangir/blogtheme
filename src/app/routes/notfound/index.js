import { connect } from 'react-redux';
import NotFound from './notfound';
import { createStructuredSelector } from 'reselect';


const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, null)(NotFound);

