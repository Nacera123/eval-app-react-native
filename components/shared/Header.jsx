import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/COLORS';
import ReturnButton from "../ui/returnButton";



const avatar = require('../../assets/images/avatar.png')

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.leftInnerContainer}>
                    <Text style={styles.name}>Your Balance</Text>
                    <Text style={styles.price}>$1,700.00</Text>

                </View>
            </View>
            <ReturnButton
                style={styles.bouton}
                iClique={() => navigation.push('onBoarding')}>
                <Text style={styles.textButton}>{'\u2190'}</Text>
            </ReturnButton>
            <Image
                source={avatar}
                style={styles.avatar}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingVertical: 15,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftInnerContainer: {
        marginLeft: 10,
    },
    name: {
        color: COLORS.whiteAlt,
        fontSize: 16,
        fontWeight: '500'
    },
    avatar: {
        width: 55,
        height: 55,
        borderColor: COLORS.yellow,
        borderWidth: 3,
        borderRadius: 60 / 2,
        backgroundColor: COLORS.yellow,
        top: 5,
    },
    textButton: {
        fontSize: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '900'
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
    },

})



