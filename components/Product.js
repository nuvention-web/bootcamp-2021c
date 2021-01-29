import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

const Product = ({productName, toProductPage}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => toProductPage()} style={styles.container} >
                <Text style={styles.text} >{productName}</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        margin: 20,
        borderColor: '#0A0A0A',
        borderWidth: 2,
        flexDirection: 'row',
    },
    text: {
        fontSize: 45,
        margin: 20,
        alignContent: 'center'
    },
    button: {
        width: 300,
        margin: 40
    }
});

export default Product;