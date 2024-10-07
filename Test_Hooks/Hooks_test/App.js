import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterApp from './useState/CounterApp';
import CounterApp02 from './useState/randomDiceRoll ';
import CounterApp_calculateInitialValue from './useState/calculateInitialValue';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterApp />
      {/* <CounterApp02 />
      <CounterApp_calculateInitialValue /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});