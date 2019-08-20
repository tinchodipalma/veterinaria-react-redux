import React from 'react';
import { connect } from 'react-redux';
import Vet from './Vet.component';

const VetContainer = (props) => (
  <Vet {...props} />
);

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(VetContainer);