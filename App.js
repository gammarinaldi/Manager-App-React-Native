import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from '@firebase/app';
import { AsyncStorage } from 'react-native';
import ReduxThunk from 'redux-thunk';
import Main from './src/components/Main';

class App extends Component {

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    // try {
    //   const value = await AsyncStorage.getItem('firebaseStatus');
    //   if (value !== null) {
    //     //Firebase already initialized!
    //     console.log('Firebase already initialized!');
    //   } else {
    //     // Initialize Firebase
    //     const config = {
    //       apiKey: 'AIzaSyAyNAlYkoPehUbc18cSWVKsmtiFtFW-WoM',
    //       authDomain: 'manager-react-native-82290.firebaseapp.com',
    //       databaseURL: 'https://manager-react-native-82290.firebaseio.com',
    //       projectId: 'manager-react-native-82290',
    //       storageBucket: 'manager-react-native-82290.appspot.com',
    //       messagingSenderId: '33426374427'
    //     };
    //     firebase.initializeApp(config);

    //     try {
    //       await AsyncStorage.setItem('firebaseStatus', 'ok');
    //     } catch (error) {
    //       console.log(error); //Error saving data
    //     }
    //   }
    // } catch (error) {
    //     console.log(error); //Error retrieving data
    // }

    const config = {
      apiKey: 'AIzaSyAyNAlYkoPehUbc18cSWVKsmtiFtFW-WoM',
      authDomain: 'manager-react-native-82290.firebaseapp.com',
      databaseURL: 'https://manager-react-native-82290.firebaseio.com',
      projectId: 'manager-react-native-82290',
      storageBucket: 'manager-react-native-82290.appspot.com',
      messagingSenderId: '33426374427'
    };
    firebase.initializeApp(config);
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App;