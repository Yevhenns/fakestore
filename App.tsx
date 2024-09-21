import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {StackNavigation} from './src/navigation/StackNavigation';
import {persist, store} from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
