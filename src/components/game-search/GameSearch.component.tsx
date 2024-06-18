import { View, StyleSheet, Text, Platform } from "react-native";
import SearchIcon from "./SearchIcon.component";

const GameSearch = () => {
    return (
        <View style={styles.container}>
            <View>
                <SearchIcon />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C161C',
        height: 64,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#50575A',
        width: 250,
        justifyContent: 'center',
    }
});
 
export default GameSearch;