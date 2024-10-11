import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const API_Screen01 = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();//dieu huong

  const navigateToScreens = () => {
    navigation.navigate('API_Screen02', { userName: name });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/Image95.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>MANAGE YOUR TASK</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Ionicons name="mail-outline" size={24} color="black" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Enter your name" 
          placeholderTextColor="#bcc1ca"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={styles.button}
        onPress={navigateToScreens} 
        >
           <Text style={styles.textButton}>GET STARTED</Text>
           <Ionicons name="arrow-forward-outline" size={24} color="white" style={styles.iconButton}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  titleContainer: {
    padding: 10,
  },
  text: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#8353e2',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 43,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#9095a0',
    paddingHorizontal: 16,
    marginVertical: 20, 
    alignSelf: 'center',
  },
  icon: {
    marginRight: 10, 
  },
  input: {
    flex: 1,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    color: '#000',
  },
  buttonContainer:{
    backgroundColor: '#26c3d9',
    width: '60%',
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button:{
    flexDirection: 'row',
  },
  textButton:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 6
  },
  iconButton:{
    padding: 5.5
  }
});

export default API_Screen01;
