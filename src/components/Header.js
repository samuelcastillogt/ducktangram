import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = () => {
    return (
        <View style={style.header}>
          <Text>Ducktagram</Text>  
        </View>
    );
};
const style= StyleSheet.create({
    header: {
        display: "flex",
        fontFamily: "bebas",
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: 1,
        padding: 10
    }
})
export default Header;