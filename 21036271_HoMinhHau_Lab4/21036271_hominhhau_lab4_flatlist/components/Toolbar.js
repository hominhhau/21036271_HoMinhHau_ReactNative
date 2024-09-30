import React from 'react';
import { View, StyleSheet, TouchableOpacity ,Image,Text} from 'react-native';
import { Icon } from 'react-native-elements';

const Toolbar = () => {

  


    return (
        <View style={styles.container}>
            {/* Menu Icon */}
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="menu" type="material" size={24} color="#000" />
            </TouchableOpacity>
            {/* Home Icon */}
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="home" type="material" size={24} color="#000" />
            </TouchableOpacity>
            {/* Notifications Icon */}
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="arrow-back" type="material" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 49,
        backgroundColor: '#00AEEF',
    },
    iconContainer: {
        padding: 10,
    },
});

export default Toolbar;
