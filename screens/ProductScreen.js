import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductScreen = () => {
    return (
        <View>
            <Text>ProductScreen</Text>
            <Image source={require('../img/productPictures.png')} />
            <Image source={require('../img/productInfo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ProductScreen;