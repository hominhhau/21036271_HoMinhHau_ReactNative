import * as React from 'react';
import API_Screen01 from './components/API_Screen01'
import API_Screen02 from './components/API_Screen02'
import API_Screen03 from './components/API_Screen03'
import API_Screen04 from './components/API_Screen04'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (


     <NavigationContainer>
      <Stack.Navigator initialRouteName="API_Screen01">
        <Stack.Screen name="API_Screen01" component={API_Screen01} options={{ headerShown: false }} />
        <Stack.Screen name="API_Screen02" component={API_Screen02} options={{ headerShown: false }} />
        <Stack.Screen name="API_Screen03" component={API_Screen03} options={{ headerShown: false }} />
        <Stack.Screen name="API_Screen04" component={API_Screen04} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};