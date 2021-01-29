import React from 'react';
import { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import UserContext from '../UserContext';

import productInfo from '../img/productInfo.png';
import productPictures from '../img/productPictures.png';



const ProductScreen = () => {
    const addScore = useContext(UserContext);
    
    return (
        <View style={styles.page} >
            <View style={styles.imageBuy} >
                <img src={productPictures} />
                <View style={styles.buttonContainer} >
                    <TouchableOpacity onPress={() => addScore(60)} style={styles.button} >Buy Now (+60)</TouchableOpacity>
                </View>
            </View>
            <img src={productInfo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        borderWidth: 10,
        borderColor: "#0A0A0A"
    },
    buttonContainer: {
        justifyContent: 'center',
        alignContent: "center"
    },
    button: {
        fontSize: 40,
        margin: 50
    },
    page: {
        backgroundColor: '#8EC660'
    },
    imageBuy: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ProductScreen;