import React, { useEffect } from 'react';

import './PetData.css';

const PetData = ({ pet, editPetAction, selectPetAction }) => {
  useEffect(() => {
    console.log(pet);

    return () => {
      selectPetAction(null);
    };
  }, []);

  if (!pet) {
    return null;
  }

  const onClose = () => {
    selectPetAction(null);
  };

  const onEdit = () => {
    editPetAction(pet)
  };

  const keys = Object.keys(pet);

  return (
    <div className="PetData">
      <ul className="PetData__List">
        {keys.map((key, i) => (
          <li className="PetData__List__Item" key={i}>
            {key}: {pet[key]}
          </li>
        ))}
      </ul>

      <div className="PetData__Actions">
        <button className="PetData__Actions__CloseButton" onClick={onClose}>
          Cerrar
        </button>
        <button className="PetData__Actions__EditButton" onClick={onEdit}>
          Editar
        </button>
      </div>
    </div>
  );  
}


export default PetData;
