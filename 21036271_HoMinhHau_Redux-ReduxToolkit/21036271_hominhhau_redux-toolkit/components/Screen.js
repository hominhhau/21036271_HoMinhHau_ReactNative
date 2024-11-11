// components/Screen.js
import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, editTodo, deleteTodo } from '../store/todoSlice';

const Screen = ({ navigation }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    const mockData = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ];
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
        <Ionicons name="create-outline" size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Ionicons name="trash-outline" size={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.input} />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
  input: { padding: 8, borderColor: '#ddd', borderWidth: 1, marginBottom: 10 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  itemTitle: { flex: 1 },
  editInput: { flex: 1, padding: 5, borderColor: '#ddd', borderWidth: 1 },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#26c3d9',
    padding: 10,
    borderRadius: 20,
  },
});

export default Screen;
