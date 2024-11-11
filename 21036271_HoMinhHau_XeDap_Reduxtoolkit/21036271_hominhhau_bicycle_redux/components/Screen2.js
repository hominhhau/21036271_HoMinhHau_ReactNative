// Screen02.js
import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../slices/productSlice';
import { Ionicons } from '@expo/vector-icons';

const Screen02 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleProductLike = (id) => {
    // Gọi action toggleLike để thay đổi trạng thái liked của sản phẩm
    dispatch(toggleLike(id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Screen03', { productId: item.id })}
      style={styles.bikeCard}
    >
      <TouchableOpacity
        style={styles.heartContainer}
        onPress={() => toggleProductLike(item.id)}
      >
        <Ionicons
          name={item.liked ? "heart" : "heart-outline"}
          size={24}
          color={item.liked ? "red" : "black"}
        />
      </TouchableOpacity>
      <Image source={item.image} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>

      {/* Nút để điều hướng đến màn hình Add */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('Add')} // Điều hướng đến màn hình Add
      >
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.bikeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 20,
  },
  bikeList: {
    paddingHorizontal: 8,
  },
  bikeCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  heartContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  bikeImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  bikePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
  addButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Screen02;
