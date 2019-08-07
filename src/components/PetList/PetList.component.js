import React, { useState } from 'react';

import './PetList.css';

const PetList = ({ history, pets, selectPetAction }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const onSelectPet = (pet) => () => {
    selectPetAction(pet);
    history.push('/pet-data');
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const className = `PetList PetList--${isOpen ? 'open' : 'closed'}`;
  return (
    <div className={className}>
      <ul>
        {pets.map((pet, i) => (
          <li className="PetList__Item" key={i} onClick={onSelectPet(pet)}>
            Nombre: {pet.name}
          </li>
        ))}
      </ul>

      <button onClick={toggleList}>{isOpen ? 'Mostrar menos' : 'Mostrar más'}</button>
    </div>
  );  
};

export default PetList;
