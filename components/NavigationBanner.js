import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const navElements = ["Clothing", "Beauty & Care", "Travel", "Audio & Tech", "Pets"];

const NavigationBanner = () => {
    return (
        <View style={styles.banner}>
            {
                navElements.map((title) => (
                    <Text >{title}</Text>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {

    }
});

export default NavigationBanner;