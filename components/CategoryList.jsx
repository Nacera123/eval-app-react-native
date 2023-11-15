import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Pressable,
    useWindowDimensions
} from 'react-native';
import data from '../assets/data';

export default function CategoryList() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    const onPressHandler = (category) => navigation.push("categoryDetail", { category });

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => onPressHandler(item)}
        >
            <Image source={item.image} style={styles.categoryImage} resizeMode='contain' />
            <Text style={styles.categoryName}>{item.category}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.textcont}>Pour vous</Text>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.category}
            />
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        top: 30,
        paddingVertical: 10,
    },
    categoryItem: {
        flex: 1,
        margin: 7,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        padding: 35,
        top: 10,
    },
    categoryImage: {
        width: 60,
        height: 60,
        alignSelf: 'center',

    },
    categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center',
    },
    textcont: {
        fontSize: 20,
        fontWeight: '700',
    }
});
