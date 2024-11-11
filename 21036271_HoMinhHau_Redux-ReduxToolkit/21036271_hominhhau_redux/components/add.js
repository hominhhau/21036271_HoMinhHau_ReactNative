import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addTodo } from '../store/todoSlice';

const Add = () => {
  const [job, setJob] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddJob = () => {
    if (job.trim()) {
      dispatch(addTodo(job));
      navigation.goBack(); // Navigate back to the previous screen
    } else {
      alert('Please enter a job title');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.profileContainer}>
          <Image source={require('../assets/User.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text01}>Hi</Text>
            <Text style={styles.text02}>Have a great day ahead</Text>
          </View>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>ADD YOUR JOB</Text>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="reader-outline" size={24} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          placeholderTextColor="#bcc1ca"
          value={job}
          onChangeText={setJob}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddJob}>
          <Text style={styles.textButton}>FINISH</Text>
          <Ionicons name="arrow-forward-outline" size={24} color="white" style={styles.iconButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imageNote} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
  textContainer: {
    paddingLeft: 10,
  },
  text01: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text02: {
    color: '#999999',
    fontSize: 14,
  },
  titleContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 43,
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
  buttonContainer: {
    backgroundColor: '#26c3d9',
    width: '60%',
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 6,
  },
  iconButton: {
    padding: 5.5,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 40,
  },
  imageNote: {
    width: 200,
    height: 200,
  },
});

export default Add;
