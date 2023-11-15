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
import { COLORS } from '../constants/COLORS';
import data from '../assets/data';
import Test from '../components/ui/test'

export default function CategoryList() {
    const { width } = useWindowDimensions();

    const navigation = useNavigation();

    const onPressHandler = (category) => navigation.push("categoryDetail", category);

    const renderCategoryItem = ({ item }) => {
        return (
            // <View style={styles.container}>
            //     <Text style={styles.title}>For you</Text>
            //     <View style={styles.cardContainer}>
            //         {data?.map((item, index) => (
            //             <Pressable
            //                 key={index}
            //                 onPress={() => onPressHandler(item)}
            //                 style={[styles.containerCategory, { width: width / 2 - 80 }]}
            //             >
            //                 <Image source={item.image} style={styles.image} />
            //                 <View style={styles.textContainer}>
            //                     <Text style={styles.name}>{item.category}</Text>
            //                 </View>
            //             </Pressable>
            //         ))}
            //     </View>
            // </View>
            <View>
                {data?.map((item, index) => (
                    <TouchableOpacity
                        style={styles.categoryItem}
                        key={index}
                        onPress={() => onPressHandler(item)}
                    // onPress={() => navigation.navigate('categoryDetail', { products: item.products })}
                    //onPress={() => navigation.push('categoryDetail')}
                    >
                        <Image source={item.image} style={styles.categoryImage} resizeMode='contain' />
                        <Text style={styles.categoryName}>{item.category}</Text>
                    </TouchableOpacity>

                ))
                }
            </View>

        );
    };
    return (
        <View style={styles.container}>

            <Text style={styles.textcont}>For you</Text>
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
