import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const book = {
  name: 'Nguyên hàm, tích phân và ứng dụng',
  supplier: 'Cung cấp bởi Tiki Trading',
  price: 141800, // Giá dạng số để dễ tính toán
  image: require('./image/NguyenHamTichPhan.jpg'),
};

const sales = {
  S10: 10,
  S20: 20,
  S30: 30,
  S40: 40,
  S50: 50,
};

const App = () => {
  const [quantity, setQuantity] = useState(1); // State để theo dõi số lượng
  const [coupon, setCoupon] = useState(''); // State để theo dõi mã giảm giá
  const [totalPrice, setTotalPrice] = useState(book.price); // State để theo dõi tổng tiền
  const [discountedPrice, setDiscountedPrice] = useState(book.price); // Tổng tiền sau khi áp dụng mã giảm giá

  // Hàm tính lại tổng tiền
  const calculateTotalPrice = (quantity, discount = 0) => {
    const priceWithoutDiscount = quantity * book.price;
    const discountAmount = priceWithoutDiscount * (discount / 100); // Tính số tiền giảm giá
    const finalPrice = priceWithoutDiscount - discountAmount;
    setTotalPrice(priceWithoutDiscount); // Tổng tiền trước giảm giá
    setDiscountedPrice(finalPrice); // Tổng tiền sau khi giảm giá
  };

  // Sự kiện tăng số lượng
  const handleIncrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      calculateTotalPrice(newQuantity, sales[coupon]); // Tính lại giá với mã giảm giá nếu có
      return newQuantity;
    });
  };

  // Sự kiện giảm số lượng
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        calculateTotalPrice(newQuantity, sales[coupon]); // Tính lại giá với mã giảm giá nếu có
        return newQuantity;
      });
    } else {
      Alert.alert('Số lượng không thể nhỏ hơn 1');
    }
  };

  // Sự kiện áp dụng mã giảm giá
  const handleApplyCoupon = () => {
    if (coupon === '') {
      Alert.alert('Vui lòng nhập mã giảm giá');
    } else if (sales[coupon]) {
      Alert.alert("Mã giảm giá   đã được áp dụng");
      calculateTotalPrice(quantity, sales[coupon]); // Áp dụng mã giảm giá
    } else {
      Alert.alert('Mã giảm giá không hợp lệ');
    }
  };

  // Sự kiện mua sau
  const handleBuyLater = () => {
    Alert.alert('Sản phẩm đã được thêm vào danh sách "Mua sau"');
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={book.image} style={styles.image} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{book.name}</Text>
          <Text style={styles.supplier}>{book.supplier}</Text>
          <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
          <Text style={styles.priceSale}>141.800 đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.buttonSoLuong} onPress={handleDecrease}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity style={styles.buttonSoLuong} onPress={handleIncrease}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMuaSau} onPress={handleBuyLater}>
              <Text style={styles.btnMuaSauText}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.giamgia}>
        <View style={styles.magiam}>
          <Text style={styles.text}>Mã giảm giá đã lưu</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.linkText}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.couponContainer}>
          <TextInput
            style={styles.couponInput}
            placeholder="Mã giảm giá"
            value={coupon}
            onChangeText={text => setCoupon(text)}
          />
          <Button title="Áp dụng" onPress={handleApplyCoupon} />
        </View>
      </View>

      <View style={styles.giftCardContainer}>
        <Text style={styles.textGift}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tạm tính</Text>
        <Text style={styles.summaryPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      <View style={styles.totalContainer}>
        <View style={styles.total}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <Text style={styles.totalPrice}>{discountedPrice.toLocaleString()} đ</Text>
        </View>

        <TouchableOpacity  onPress={() => {}}   style={styles.btnDatHang}>
         <Text style={styles.textDatHang } >TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: '#C4C4C4',
    flex: 1,
  },
  productContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  supplier: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  price: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceSale: {
    color: '#808080',
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonSoLuong: {
    backgroundColor: '#C4C4C4',
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMuaSau: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  btnMuaSauText: {
    color: 'blue',
    fontSize: 12,
  },
  magiam: {
    flexDirection: 'row',
  },
  giamgia: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 12,
  },
  quantity: {
    marginHorizontal: 10,
  },
  couponContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  couponInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    marginRight: 10,
    padding: 5,
  },
  giftCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#ffffff',
  },
  textGift: {
    paddingLeft: 10,
  },
  linkText: {
    color: 'blue',
    marginLeft: 20,
    fontSize: 12,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: '#ffffff',
    height: 50,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryPrice: {
    fontSize: 16,
    color: 'red',
  },
  totalContainer: {
    justifyContent: 'space-between',
    height: 120,
    marginTop: 40,
    backgroundColor: '#ffffff',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  btnDatHang:{
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "red",
   
height: 45,
margin:10,
borderRadius: 2,


  },
  textDatHang:{
    color:"white",
    fontWeight:"bold"
  }
});

export default App;