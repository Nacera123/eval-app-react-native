import { StyleSheet, Pressable } from "react-native";
import { COLORS } from '../../constants/COLORS'



export default function ReturnButton({ children, iClique }) {
    console.log(iClique)
    return (
        <Pressable onPress={iClique} style={styles.myButton}>{children}</Pressable >
    );
}

const styles = StyleSheet.create({
    myButton: {
        width: 40,
        marginLeft: 80,
        // borderRadius: 60 / 2,

    }
})

