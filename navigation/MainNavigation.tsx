import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';

import Home from '../screens/Home/Home';
import Item from '../screens/Item/Item';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.Home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.Home} component={Home} />
        <Stack.Screen name={routes.Item} component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
