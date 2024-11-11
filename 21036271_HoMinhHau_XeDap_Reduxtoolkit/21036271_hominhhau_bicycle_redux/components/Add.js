// Add.js
import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/productSlice'; // Import action addProduct

const Add = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    if (name && price && image) {
      // Dispatch action addProduct để thêm sản phẩm vào Redux store
      dispatch(addProduct({ name, price, image }));
      // Quay lại màn hình trước sau khi thêm sản phẩm
      navigation.goBack();
    }
  };

  return (
    <View style={styles.addContainer}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Add;
