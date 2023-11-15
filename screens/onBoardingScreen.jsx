import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, SafeAreaView, Pressable } from 'react-native';
import CustomButton from "../components/ui/button";
import { COLORS } from "../constants/COLORS";

const imageIndex = require('../assets/images/overview.png');

export default function OnBoardingScreen({ navigation }) {
    console.log(navigation);
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Image
                    source={imageIndex}
                    style={styles.imageBackground}
                    resizeMode='stretch'
                />
                <Text style={styles.textInner}>Complete your grocery need easily</Text>

                <CustomButton iClique={() => navigation.push('category')}>
                    <Text style={styles.textButton}>Get Started  →</Text>
                </CustomButton>

            </SafeAreaView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 15,
        top: 3,
    },
    imageBackground: {
        flex: 0.8,
        width: '100%',
        justifyContent: 'flex-start',
        borderBottomRightRadius: 200 / 2,
        borderBottomLeftRadius: 200 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: COLORS.white,
    },
    textInner: {
        top: 30,
        fontSize: 42,
        textAlign: 'center',
        fontWeight: '600',
    },
    textButton: {
        alignSelf: 'center',
        fontSize: 20,
        color: COLORS.white,
        fontWeight: '600'
    }
});
