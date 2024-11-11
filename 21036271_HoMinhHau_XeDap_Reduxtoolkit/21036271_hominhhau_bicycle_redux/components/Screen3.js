import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../slices/productSlice';
import { Ionicons } from '@expo/vector-icons';

const Screen03 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { productId } = route.params || {}; // Lấy productId từ params

  // Lấy sản phẩm từ Redux state
  const product = useSelector((state) =>
    state.products?.data?.find((item) => item.id === productId) // Kiểm tra sản phẩm
  );
  const dispatch = useDispatch();

  // Kiểm tra nếu sản phẩm không tồn tại
  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </SafeAreaView>
    );
  }

  const handleLikeToggle = () => {
    dispatch(toggleLike(product.id)); // Thực hiện toggle like
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={product.image}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.productName}>{product.name}</Text>
            <TouchableOpacity
              onPress={handleLikeToggle}
              style={styles.likeButton}
            >
              <Ionicons
                name={product.liked ? 'heart' : 'heart-outline'}
                size={24}
                color={product.liked ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.discountedPrice}>${product.price}</Text>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              This is a description of the product.
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  errorText: { fontSize: 18, color: 'red', textAlign: 'center', marginTop: 20 },
  backButton: { position: 'absolute', top: 20, left: 20, zIndex: 1 },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: { width: '80%', height: '80%' },
  detailsContainer: { padding: 20 },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  productName: { fontSize: 24, fontWeight: 'bold' },
  likeButton: { padding: 8 },
  priceContainer: { marginBottom: 20 },
  discountedPrice: { fontSize: 20, fontWeight: 'bold' },
  descriptionSection: { marginTop: 20 },
  descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  descriptionText: { fontSize: 16, color: '#666666' },
  addToCartButton: {
    margin: 20,
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addToCartText: { fontSize: 18, color: 'white', fontWeight: 'bold' },
});

export default Screen03;
