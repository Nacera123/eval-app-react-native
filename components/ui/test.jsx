import { StyleSheet, Pressable } from "react-native";
import { COLORS } from '../../constants/COLORS'



export default function Test({ children, iClique }) {
    console.log(iClique)
    return (
        <Pressable onPress={iClique} style={styles.myButton}>{children}</Pressable >
    );
}

const styles = StyleSheet.create({

})

