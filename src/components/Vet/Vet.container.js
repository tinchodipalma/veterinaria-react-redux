import React from 'react';
import { connect } from 'react-redux';
import Vet from './Vet.component';
import { createPetAction } from '../../store/actions';

const VetContainer = (props) => (
  <Vet {...props} />
);

const mapStateToProps = (state) => (state);
const mapDispatchToProps = {
  createPetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(VetContainer);