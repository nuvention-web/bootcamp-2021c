import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import NavigationBanner from '../components/NavigationBanner';
import Product from '../components/Product';

const products = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6", "Product7"];

const HomeScreen = ({navigation}) => {
    const navToProduct = () => {
        navigation.navigate('ProductScreen');
    }

    return (
        <View >
            <NavigationBanner/>
            {
                products.map((productName) =>(
                    <Product productName={productName} toProductPage={navToProduct} />
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({

});

export default HomeScreen;