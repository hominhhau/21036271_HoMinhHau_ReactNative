import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './components/Screen1';
import Screen02 from './components/Screen2';
import Screen03 from './components/Screen3';
import Add from './components/Add';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen01} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={Screen02} options={{ headerShown: false }} />
          <Stack.Screen name="Screen3" component={Screen03} options={{ headerShown: false }} />
          <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
