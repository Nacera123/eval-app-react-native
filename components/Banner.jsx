import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/COLORS";

const banner = require('../assets/images/banner.png')

export default function Banner() {
    return (
        <View style={styles.bannerContainer}>
            <ImageBackground
                source={banner}
                style={styles.image}
                resizeMode='cover'
            >
                <LinearGradient
                    colors={['transparent', '#313030']}
                    end={{ x: 0.5, y: 0.9 }}
                    style={styles.linear}
                >
                    <View style={styles.containerText}>
                        <Text style={styles.textContainer}>Buy Orange 10kg</Text>
                        <Text style={styles.textContainer}>Get Discount 25%</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: 'red',
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        top: 10,

    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    linear: {
        flex: 1,
        // paddingHorizontal: 30,
        // paddingVertical: 15,
        justifyContent: 'flex-end',
    },
    containerText: {
        // backgroundColor: 'red',
        padding: 20,
    },
    textContainer: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: '700'
    }
})