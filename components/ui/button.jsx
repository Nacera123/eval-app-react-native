import { StyleSheet, Pressable } from "react-native";
import { COLORS } from '../../constants/COLORS'



export default function CustomButton({ children, iClique }) {
    console.log(children)
    return (
        <Pressable onPress={iClique} style={styles.myButton}>{children}</Pressable >
    );
}

const styles = StyleSheet.create({
    myButton: {
        top: 60,
        backgroundColor: COLORS.green,
        width: 230,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 18,
    }
})

