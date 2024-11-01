// components/Screen.js
import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, editTodo, deleteTodo } from '../store/todoSlice';

const mockData = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: true },
  { id: 3, title: 'Todo 3', completed: false },
  { id: 4, title: 'Todo 4', completed: true },
  
];

const Screen = ({ navigation = { navigate: () => {} }, userName }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos) || [];
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    dispatch(setTodos(mockData));
  }, [dispatch]);

  const handleEdit = (id) => {
    setEditingId(id);
    const todo = todos.find((todo) => todo.id === id);
    if (todo) setNewTitle(todo.title);
  };

  const handleSaveEdit = (id) => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id, newTitle }));
      setEditingId(null);
      setNewTitle('');
    } else {
      Alert.alert("Title can't be empty.");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Ionicons
        name={item.completed ? 'checkbox-outline' : 'square-outline'}
        size={24}
        color="#50a76f"
      />
      {editingId === item.id ? (
        <TextInput
          style={styles.editInput}
          value={newTitle}
          onChangeText={setNewTitle}
          onSubmitEditing={() => handleSaveEdit(item.id)}
          autoFocus
        />
      ) : (
        <Text style={styles.itemTitle}>{item.title}</Text>
      )}
      <TouchableOpacity onPress={() => handleEdit(item.id)}>
        <Ionicons name="create-outline" size={24} color="#50a76f" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Ionicons name="trash-outline" size={24} color="#d9534f" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <View style={styles.profileContainer}>
          <Image source={require('../assets/User.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text01}>Hi {userName}</Text>
            <Text style={styles.text02}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.findContainer}>
        <Ionicons
          name="search-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#bcc1ca"
        />
      </View>

      <View style={styles.listToDoContainer}>
        {Array.isArray(todos) && todos.length > 0 ? (
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>Không có dữ liệu</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add')}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileContainer: { flexDirection: 'row', alignItems: 'center' },
  image: { width: 40, height: 40, borderRadius: 20, borderWidth: 1 },
  textContainer: { paddingLeft: 10 },
  text01: { fontSize: 16, fontWeight: 'bold' },
  text02: { color: '#999999', fontSize: 14 },
  findContainer: {
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
  icon: { marginRight: 10 },
  input: {
    flex: 1,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    color: '#000',
  },
  listToDoContainer: { flex: 1 },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  itemTitle: { flex: 1, fontSize: 16, marginLeft: 10 },
  editInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#30c8f8',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen;
