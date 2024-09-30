import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, Dimensions, TextInput } from 'react-native';
import Toolbar from './components/Toolbar';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Screen_4a = () => {

    const DATA = [
        { id: '1', img: require('./assets/giacchuyen1.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Phụ kiện', price: '69.900 đ', discount: '-39%' },
        { id: '2', img: require('./assets/daynguon1.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Phụ kiện', price: '69.900 đ', discount: '-39%' },
        { id: '3', img: require('./assets/dauchuyendoipsps21.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Phụ kiện', price: '69.900 đ', discount: '-39%' },
        { id: '4', img: require('./assets/dauchuyendoi1.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Phụ kiện', price: '69.900 đ', discount: '-39%' },
        { id: '5', img: require('./assets/daucam1.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Phụ kiện', price: '69.900 đ', discount: '-39%' },
        { id: '6', img: require('./assets/dauchuyendoi1.png'), name: 'Cáp chuyển từ Cổng USB sang PS2', shop: 'Phụ kiện', price: '69.900 đ', discount: '-39%' }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.img} style={styles.itemImage} />
            <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
            <Text style={styles.itemShop}>Shop {item.shop}</Text>
           
            <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((i) => (
                <AntDesign key={i} name="star" size={14} color="#FFD700" />
                ))}
                <Text style={styles.ratingText}>(15)</Text>
            </View>
            <View style={styles.containerPrice}>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="arrow-back" type="material" size={24} color="#fff" />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Dây cáp usb"
                    placeholderTextColor="#000"
                />
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="shopping-cart" type="material" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="more" type="material" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Product List */}
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Two columns
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.productList}
            />

            {/* Bottom Toolbar */}
            <View style={styles.footer}>
                <Toolbar />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e5e5e5",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 49,
        backgroundColor: '#00AEEF',
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#fff',
        height: 35,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginLeft: 10,
    },
    iconContainer: {
        padding: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
        marginTop: 2,
    },
    ratingText: {
        marginLeft: 4,
        color: '#666',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    productList: {
        paddingBottom: 80,  
    },
    itemContainer: {
      
        padding: 10,
       
        marginBottom: 10,
        width: width * 0.45,
       
    },
    itemImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    itemName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        textAlign: 'left',
    },
    itemShop: {
        fontSize: 12,
        color: '#f00',
        marginTop: 4,
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    discount: {
        fontSize: 12,
        color: '#00f',
        marginTop: 6,
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    containerPrice:{
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
});

export default Screen_4a;
