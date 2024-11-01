// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store/store';
import Screen from './components/Screen';
import AddTodoScreen from './components/add'; // Create this screen

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screen} options={{ title: 'Todo List' }} />
        <Stack.Screen name="Add" component={AddTodoScreen} options={{ title: 'Add New Todo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
