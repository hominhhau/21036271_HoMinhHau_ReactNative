
import Screen_01 from "./Screen_01.js"
import Screen_02 from "./Screen_02.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen_01} />
         <Stack.Screen name="Details" component={Screen_02} />
      </Stack.Navigator>
    </NavigationContainer>
   
   
  );
}


