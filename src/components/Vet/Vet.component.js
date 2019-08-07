import React from 'react';
import PetForm from '../PetForm';
import PetList from '../PetList';
import PetData from '../PetData';

import './Vet.css';

const Vet = ({ isEdit, selectedPet, pets, createPetAction }) => {
  const onPetSubmit = (pet) => {
    createPetAction(pet);
  };

  const onPetDelete = () => {};
  const onEditCancel = () => {};
  const onPetDataClose = () => {};
  const onPetEdit = () => {};

  return (
    <div className="Vet">
      <div>
        <PetForm
          isEdit={isEdit}
          pet={selectedPet}
          onCreate={onPetSubmit}
          onDelete={onPetDelete}
          onEditCancel={onEditCancel}
        />
      </div>
      <div>
        <PetList />
      </div>
      <div>
        <PetData
          pet={selectedPet}
          onClose={onPetDataClose}
          onEdit={onPetEdit}
        />
      </div>
    </div>
  );
};

export default Vet;