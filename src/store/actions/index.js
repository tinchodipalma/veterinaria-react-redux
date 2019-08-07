export const CREATE_PET = 'Vet/CREATE_PET';
export const UPDATE_PET = 'Vet/UPDATE_PET';
export const EDIT_PET = 'Vet/EDIT_PET';
export const DELETE_PET = 'Vet/DELETE_PET';
export const SELECT_PET = 'Vet/SELECT_PET';


export const createPetAction = (pet) => ({ type: CREATE_PET, payload: pet });
export const editPetAction = (pet) => ({ type: EDIT_PET, payload: pet });
export const updatePetAction = (pet, index) => ({ type: UPDATE_PET, payload: { pet, index } });
export const deletePetAction = (index) => ({ type: DELETE_PET, payload: index });
export const selectPetAction = (pet) => ({ type: SELECT_PET, payload: pet });

export default {
  createPetAction,
  updatePetAction,
  editPetAction,
  deletePetAction,
  selectPetAction,
};