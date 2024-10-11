import React, { useState, useEffect } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
} from 'react-native';

const Item = ({ name, email, onDelete, onEdit }) => (
  <View style={styles.item}>
    <Text style={styles.nameText}>Name: {name}</Text>
    <Text style={styles.emailText}>Email: {email}</Text>
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.buttonText}>DELETE</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editButton} onPress={onEdit}>
      <Text style={styles.buttonText}>EDIT</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [data, setData] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
      );
      const json = await response.json();
      const filteredData = json.slice(0, 3).map((item) => ({
        id: item.id.toString(),
        name: item.name,
        email: item.email,
      }));
      setData(filteredData);

      if (filteredData.length > 0) {
        const lastItem = filteredData[filteredData.length - 1];
        setLastId(parseInt(lastItem.id));
      } else {
        setLastId(0);
      }

      Alert.alert('Success!', 'Data fetched successfully!');
    } catch (error) {
      Alert.alert('Failed', 'Failed to fetch data!');
      console.error(error);
    }
  };

  const addRandomItem = async () => {
    const newId = lastId + 1;
    const newItem = {
      id: newId.toString(),
      name: newName,
      email: newEmail,
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setData((prevData) => [...prevData, newItem]);
      setLastId(newId);
      setNewName(''); // Clear input
      setNewEmail(''); // Clear input
      setAddModalVisible(false); // Close modal
      Alert.alert('Success!', 'New item added successfully!');
    } catch (error) {
      Alert.alert('Failed', 'Failed to add item!');
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setData((prevData) => prevData.filter((item) => item.id !== id));
      Alert.alert('Success!', 'Item deleted successfully!');
    } catch (error) {
      Alert.alert('Failed', 'Failed to delete item!');
      console.error(error);
    }
  };

  const editItem = (item) => {
    setCurrentItem(item);
    setUpdatedName(item.name);
    setUpdatedEmail(item.email);
    setModalVisible(true);
  };

  const saveEdit = async () => {
    const updatedItem = {
      id: currentItem.id,
      name: updatedName,
      email: updatedEmail,
    };

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${currentItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setData((prevData) =>
        prevData.map((item) => (item.id === currentItem.id ? updatedItem : item))
      );

      setModalVisible(false);
      Alert.alert('Success!', 'Item updated successfully!');
    } catch (error) {
      Alert.alert('Failed', 'Failed to update item!');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <TouchableOpacity style={styles.button} onPress={() => setAddModalVisible(true)}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            email={item.email}
            onDelete={() => deleteItem(item.id)}
            onEdit={() => editItem(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Modal for adding new item */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={addModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newName}
            onChangeText={setNewName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={newEmail}
            onChangeText={setNewEmail}
          />
          <TouchableOpacity style={styles.saveButton} onPress={addRandomItem}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setAddModalVisible(false)}
          >
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal for editing item */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={updatedName}
            onChangeText={setUpdatedName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={updatedEmail}
            onChangeText={setUpdatedEmail}
          />
          <TouchableOpacity style={styles.saveButton} onPress={saveEdit}>
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  action: {},
  button: {
    backgroundColor: '#26c3d9',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    color: '#555',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff4c4c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#ff4c4c',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
