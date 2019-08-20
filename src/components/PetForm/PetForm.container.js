import React from 'react';
import { connect } from 'react-redux';
import { createPetAction } from '../../store/actions';
import API from '../../api/api';
import PetForm from './PetForm.component';

const PetFormContainer = (props) => {
  const onPetSubmit = async (pet) => {

    const petFromAPI = await API.createPet('tincho', pet);

    props.createPetAction(petFromAPI);
  };

  return (
    <PetForm {...props} onCreate={onPetSubmit} />
  );
}

const mapDispatchToProps = {
  createPetAction,
};

export default connect(null, mapDispatchToProps)(PetFormContainer);
