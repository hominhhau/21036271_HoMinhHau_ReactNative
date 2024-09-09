import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FristScreen = () => {
  return (
    <View style={styles.container}>
      {/* Circle */}
      <View style={styles.circle} />

      {/* Title */}
      <Text style={styles.title}>GROW</Text>
      <Text style={styles.title}>YOUR BUSINESS</Text>

      {/* Description */}
      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF', // Light blue background
  },
  circle: {
    marginTop:50,
    marginBottom:50,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: 'black',
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    
    
  },
  description: {
    marginTop:50,
    marginBottom:50,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
    marginTop:50,
    marginBottom:50,
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FristScreen;
