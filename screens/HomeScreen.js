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
        <View style={styles.page} >
            <NavigationBanner/>
            {
                products.map((productName) =>(
                    <Product key={productName} productName={productName} toProductPage={navToProduct} />
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#8EC660'
    }
});

export default HomeScreen;