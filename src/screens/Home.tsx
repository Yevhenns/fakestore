import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../components/Button';
import {HomeScreenNavigationProp} from '../navigation/StackNavigation';

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

export function Home({navigation}: HomeProps) {
  const addItem = () => {
    navigation.navigate('AddItem');
  };

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('Details')}>Details</Button>
      <Button onPress={addItem}>Add item</Button>
    </View>
  );
}
