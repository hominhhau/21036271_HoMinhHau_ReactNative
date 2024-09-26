import {useEffect,useState} from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function ProductListing({ navigation, route }) {
  const [selectedColor, setSelectedColor] = useState('blue');

  useEffect(() => {
    if (route.params?.color) {
      setSelectedColor(route.params.color);
    }
  }, [route.params?.color]);

  const phoneImages = {
    'blue': require('./image/vs_blue.png'),
    'sliver': require('./image/vs_silver.png'),
    'black': require('./image/vs_black.png'),
    'red': require('./image/vs_red.png'),
  };

  return (
    <View style={styles.container}>
      <Image source={phoneImages[selectedColor]} style={styles.image} />
      <Text style={styles.title}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((i) => (
          <AntDesign key={i} name="star" size={16} color="#FFD700" />
        ))}
        <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.originalPrice}>1.790.000 đ</Text>
      </View>
      <Text style={styles.discount}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      <TouchableOpacity 
        style={styles.colorButton} 
        onPress={() => navigation.navigate('Details', { currentColor: selectedColor })}
      >
        <Text style={styles.colorButtonText}>4 MÀU-CHỌN MÀU</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton} onPress={() => alert("bạn đang chọn mua sản phẩm ")}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    margin: 0,
  },
  image: {
    width: 280,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 16,
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 8,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: '#666',
    paddingLeft: 20,
    textDecorationLine: 'line-through',
  },
  discount: {
    color: "#FA0000",
    fontWeight: 'bold',
    marginBottom: 16,
  },
  colorButton: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  colorButtonText: {
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#E53935',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ProductListing;