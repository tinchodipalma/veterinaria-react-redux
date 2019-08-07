import React from 'react';
import { connect } from 'react-redux';
import PetList from './PetList.component';
import { selectPetAction } from '../../store/actions';

const PetListContainer = (props) => (
  <PetList {...props} />
);

const mapStateToProps = ({ pets }) => ({ pets });
const mapDispatchToProps = {
  selectPetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PetListContainer);
