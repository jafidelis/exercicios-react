import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inc, dec, stepChanged } from './counterActions';

const Counter = props => (
    <div>OK</div>
)

mapStateToProps = state => ({ counter: state.counter });
mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);