import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'; // Add useEffect here

export default function Screen2({ navigation, route }) {
  const [color, setColor] = useState('blue');

  useEffect(() => {
    if (route.params?.currentColor) {
      setColor(route.params.currentColor);
    }
  }, [route.params?.currentColor]);

  const phoneImages = {
    'blue': require('./image/vs_blue.png'),
    'sliver': require('./image/vs_silver.png'),
    'black': require('./image/vs_black.png'),
    'red': require('./image/vs_red.png'),
  };

  const handleColor = (color) => {
    setColor(color);
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={phoneImages[color]} style={styles.img} />
        <Text style={styles.productTitle}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.productTitle}>Chọn một màu bên dưới</Text>
        <View style={styles.color}>
          <TouchableOpacity
            style={styles.silver}
            onPress={() => handleColor('sliver')}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.red}
            onPress={() => handleColor('red')}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.black}
            onPress={() => handleColor('black')}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.blue}
            onPress={() => handleColor('blue')}
          ></TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.done}
          onPress={() => navigation.navigate('Home', { color: color })}
        >
          <Text style={styles.buttonText}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    width: 120,
    height: 150,
  },
  productContainer: {
    width: "100%",
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    width: "60%",
  },
  main: {
    backgroundColor: '#C4C4C4',
    flex: 1,
    width: "100%",
    margin: 0,
  },
  color: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  silver: {
    height: 90,
    width: 90,
    backgroundColor: '#C5F1FB',
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  red: {
    height: 90,
    width: 90,
    backgroundColor: '#F30D0D',
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  black: {
    height: 90,
    width: 90,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  blue: {
    height: 90,
    width: 90,
    backgroundColor: '#234896',
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  done: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#4D6DC1',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
