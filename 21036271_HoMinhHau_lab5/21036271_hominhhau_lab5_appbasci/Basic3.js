import React from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';

const AppBaic = () => {
  // Sample data for the FlatList
  const [data, setData] = React.useState([
    { id: '1', title: 'Ho' },
    { id: '2', title: 'Minh' },
    { id: '3', title: 'Hau' },
  ]);

  // Placeholder functions for CRUD operations7
  const handleCreate = () => {
    console.log('Create item');
  };

  const handleUpdate = () => {
    console.log('Update item');
  };

  const handleDelete = () => {
    console.log('Delete item');
  };

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCreate}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    marginBottom:10,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  textAlign: 'center',
  },
  list: {
    flex: 1,

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
 alignItems:"center",
  },
});

export default AppBaic;