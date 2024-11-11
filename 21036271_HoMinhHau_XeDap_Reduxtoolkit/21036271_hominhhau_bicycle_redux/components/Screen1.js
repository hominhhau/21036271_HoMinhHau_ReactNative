import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

const Screen01 =() =>{
   const [name, setName] = useState('');
   const navigation = useNavigation();
  const navigateToScreens = () => {
    navigation.navigate('Screen2', { userName: name });
  };
  return(
    <View style={styles.container}>
    <Text style={{textAlign:"center", fontSize:20,fontFamily:"VT323", marginTop:40, fontWeight:"bold"}}>A premium online store for sporter and their stylish choice</Text>
    <View style={styles.containerImage}>
    <Image
    source={require("../assets/xe.png")}
    style={{width:250,height:250}}
    />
   
    </View>
 <Text style={{alignSelf:"center", paddingTop:20, fontSize:20, fontWeight:"bold", }}>POWER BIKE {"\n"}      SHOP</Text>

 <View style={styles.containerBTn}>
 <TouchableOpacity
 onPress={navigateToScreens}>
<Text style={{padding:20,color:"white"}}>Get Started</Text>
</TouchableOpacity>

 </View>

    <TextInput placeholder=""
    value={name}
    onChangeText={setName}
    />
    </View>
  )

}
const styles = StyleSheet.create({
container:{
  flex:1,
  padding:20
},

containerImage:{
  paddingTop:20,
  alignItems:"center",
  backgroundColor:"#E941411A",
  borderRadius:10
},
containerBTn:{
  alignItems:"center",
  backgroundColor:"#E94141",
  borderRadius:20,
  width:"70%",
  alignSelf:"center",
  paddingTop:"10",
  
}

})
export default Screen01;
