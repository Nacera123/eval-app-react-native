//rnfe
//avec style rnfs
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import { COLORS } from "../constants/COLORS";
import Header from "../components/shared/Header";
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList'



export default function CategoryScreen({ navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Banner />

            <CategoryList />
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: COLORS.white,
        paddingHorizontal: 25,
    },

    textcont: {
        fontSize: 20,
        fontWeight: '600',

    },



})