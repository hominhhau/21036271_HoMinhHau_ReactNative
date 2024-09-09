import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import BusinessScreen from "./Bai1.js"
const YourApp = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.boldText}>Hồ Minh Hậu</Text>
      <Image source={{uri:"https://picsum.photos/200/300"}} style={{height:100, width:100}}> </Image>
    </View>
  );

  

};

const styles = StyleSheet.create({
  container: {
     flex: 1, backgroundColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  boldText: {
    fontWeight: 'bold',
  },
});


export default YourApp;
