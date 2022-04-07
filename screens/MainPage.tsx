import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';

export default function MainPage() {
    return(
        <View style={styles.Cointainer}>
        <Text>Hello world</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Cointainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        

    }
})