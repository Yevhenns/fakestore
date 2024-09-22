import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {BottomNavigation} from './src/navigation/BottomNavigation';
import {persist, store} from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <NavigationContainer>
          <BottomNavigation />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
