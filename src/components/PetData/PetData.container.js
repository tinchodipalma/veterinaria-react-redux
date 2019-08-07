import React from 'react';
import { connect } from 'react-redux';
import PetData from './PetData.component';
import { selectPetAction, editPetAction } from '../../store/actions';


const PetDataContainer = (props) => (
  <PetData {...props} />
);

const mapStateToProps = ({ selectedPet }) => ({ pet: selectedPet });
const mapDispatchToProps = {
  editPetAction,
  selectPetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDataContainer);