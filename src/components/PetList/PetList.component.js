import React from 'react';

const PetList = ({ pets, selectPetAction }) => {
  const onSelectPet = (pet) => () => {
    selectPetAction(pet);
  };

  return (
    <div className="PetList">
      <ul>
        {pets.map((pet, i) => (
          <li className="PetList__Item" key={i} onClick={onSelectPet(pet)}>
            Nombre: {pet.name}
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default PetList;
