import { CREATE_PET, UPDATE_PET, EDIT_PET, DELETE_PET, SELECT_PET } from '../actions';

export const INITIAL_STATE = {
  isEdit: false,
  pets: [],
  selectedPet: null,
};

const VetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PET:
      return {
        ...state,
        pets: state.pets.concat(action.payload),
      };

    case UPDATE_PET:
      const newPets = [ ...state.pets ];
      newPets[action.payload.index] = action.payload.pet;
      
      return {
        ...state,
        pets: newPets,
      };

    case EDIT_PET:
      return {
        ...state,
        isEdit: true,
        selectedPet: action.payload,
      };

    case DELETE_PET:
      const newDeletePets = [ ...state.pets ];
      newDeletePets.splice(action.payload, 1);

      return {
        ...state,
        pets: newDeletePets,
      };

    case SELECT_PET:
      return {
        ...state,
        selectedPet: action.payload,
      };

    default:
      return state;
  }
};

export default VetReducer;
