import React from 'react';
import PetForm from '../PetForm';

import './Vet.css';

const Vet = ({ isEdit, selectedPet, pets, createPetAction }) => {
  const onPetDelete = () => {};
  const onEditCancel = () => {};

  return (
    <div className="Vet">
      <div>
        <PetForm
          isEdit={isEdit}
          pet={selectedPet}
          onDelete={onPetDelete}
          onEditCancel={onEditCancel}
        />
      </div>
    </div>
  );
};

export default Vet;