import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from '../constants/COLORS'
import data from '../assets/data'

export default function CategoryDetailScreen({ route }) {
    const navigation = useNavigation();
    const category = route.params?.category;
    const goBack = () => navigation.goBack();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContent}>
                <Pressable onPress={goBack} style={styles.goBack}>
                    <Text style={styles.return}>{'\u2190'}</Text>
                </Pressable>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={category.products}
                extraData={(item, index) => index}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 16 }} />}
                renderItem={({ item, index }) =>
                    <View>
                        <View style={styles.products}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.infoProduit}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.stock}>1000 ready stock</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>
                            <View>
                                <AntDesign style={styles.heart} name="hearto" size={30} color="black" />
                            </View>
                        </View>
                        <View style={styles.separateur}></View>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        top: 10,
    },
    return: {
        fontSize: 40,
        fontWeight: '600',
    },
    headerContent: {
        padding: 10,
    },
    products: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 5,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
        marginRight: 16,
        resizeMode: "contain",
    },

    infoProduit: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },

    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    heart: {
        marginRight: 15,

    },
    separateur: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 16,
        width: 300,
        alignSelf: 'center',
    },
});