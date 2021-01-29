import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserContext from '../UserContext';

const navElements = ["Clothing", "Beauty & Care", "Travel", "Audio & Tech", "Pets"];

const NavigationBanner = () => {
    return (
        <View style={styles.banner}>
            {
                navElements.map((title) => (
                    <Text style={styles.title} >{title}</Text>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    title: {
        fontSize: 35,
    }
});

export default NavigationBanner;