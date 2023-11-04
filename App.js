import {Fragment} from "react"
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <Fragment>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <View style={styles.appContainer}>
                <Text>Hello</Text>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 16
    },
    itemsContainer: {
        flex: 4
    }
});
