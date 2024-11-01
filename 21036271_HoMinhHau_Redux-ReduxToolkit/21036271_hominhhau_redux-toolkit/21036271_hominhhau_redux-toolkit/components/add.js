// components/Add.js
import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
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
      navigation.goBack();
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
      <Text style={styles.text}>ADD YOUR JOB</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="reader-outline" size={24} color="green" />
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          placeholderTextColor="#bcc1ca"
          value={job}
          onChangeText={setJob}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddJob}>
        <Text style={styles.textButton}>FINISH</Text>
        <Ionicons name="arrow-forward-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  headerContainer: { flexDirection: 'row', alignItems: 'center' },
  profileContainer: { flexDirection: 'row', alignItems: 'center' },
  image: { width: 40, height: 40, borderRadius: 20 },
  textContainer: { paddingLeft: 10 },
  text01: { fontSize: 16, fontWeight: 'bold' },
  text02: { color: '#999999', fontSize: 14 },
  text: { fontSize: 35, fontWeight: 'bold', alignSelf: 'center' },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#9095a0',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  input: { flex: 1, fontSize: 16, color: '#000' },
  button: {
    flexDirection: 'row',
    backgroundColor: '#26c3d9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  textButton: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default Add;
