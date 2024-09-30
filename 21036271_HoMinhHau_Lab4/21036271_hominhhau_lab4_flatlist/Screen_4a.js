import React from 'react';
import { View, StyleSheet,TouchableOpacity ,Text,Image,FlatList} from 'react-native';
import Toolbar from './components/Toolbar';
import { Icon } from 'react-native-elements';
const Screen_4a = () => {

const DATA = [
  { id: '1', img: require('./assets/ca_nau_lau.png'),name: 'Ca nấu lẩu, nấu mì mini', shop: 'DeVang' },
  { id: '2', img: require('./assets/ga_bo_toi.png') ,name: '1Kg khô gà bơ tỏi',  shop: 'LDT Food' },
  { id: '3', img: require('./assets/xa_can_cau.png'), name: 'Xe cần cẩu',  shop: 'Thế giới đồ chơi'  },
  { id: '4', img: require('./assets/do_choi_dang_mo_hinh.png'), name: 'Đồ chơi dạng mô hình' ,  
  shop: 'Thế giới đồ chơi' },
  { id: '5', img: require('./assets/lanh_dao_gian_don.png'), name: 'Lãnh đạo giảng đơn',  shop: 'Minh Long Book'  },
  { id: '6', img: require('./assets/hieu_long_con_tre.png'), name: 'Hiểu lòng con trẻ',  shop: 'Minh Long Book'  },
    { id: '7', img: require('./assets/hieu_long_con_tre.png'), name: 'Hiểu lòng con trẻ',  shop: 'Minh Long Book'  },
      { id: '88', img: require('./assets/hieu_long_con_tre.png'), name: 'Hiểu lòng con trẻ',  shop: 'Minh Long Book'  },
  
];
const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.itemShop}>Shop {item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

    return (
        <View style={styles.container}>

        <View style={styles.header}>
         {/* Menu Icon */}
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="arrow-back" type="material" size={24} color="#000" />
            </TouchableOpacity>
           
            <Text> Chat </Text>
            {/* Notifications Icon */}
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="shopping-cart" type="material" size={24} color="#000" />
            </TouchableOpacity>
        </View>
        <Text>Bạn có thắt mắt gì vui lòng liên hệ ngay với chúng tôi </Text>
       <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

            <View style={styles.footer}>
                <Toolbar />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#e5d5d5",
        
        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 49,
        backgroundColor: '#00AEEF',
        
        top: 0,
        left: 0,
        right: 0,

    },
       iconContainer: {
        padding: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
      itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemShop: {
    fontSize: 14,
    color: '#f00',
    marginTop: 4,
  },
  chatButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Screen_4a;
