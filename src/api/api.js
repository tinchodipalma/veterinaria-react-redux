import axios from 'axios';

const petsAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

class API {
  static async getPets() {
    const { data: pets } = await petsAxiosInstance.get('/pets');
    return pets;
  }

  static async createPet(namespace, pet) {
    const { data } = await petsAxiosInstance.post(`/pets/${namespace}`, pet);

    return data;
  }
}

export default API;