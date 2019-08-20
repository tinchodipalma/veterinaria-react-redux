import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPetsAction } from '../../store/actions';
import App from './App.component';
import API from '../../api/api';

const AppContainer = (props) => {
  useEffect(() => {
    const fetchPets = async () => {
      const petsFromAPI = await API.getPets();
      props.loadPetsAction(petsFromAPI);
    };

    fetchPets();
  }, [ props ]);

  return (
    <App />
  );
};

const mapDispatchToProps = {
  loadPetsAction,
};

export default connect(null, mapDispatchToProps)(AppContainer);
