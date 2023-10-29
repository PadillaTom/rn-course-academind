import {StyleSheet, Text, View} from "react-native";

function GoalItem({name}) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    itemText: {
        color: 'white'
    }
})

export default GoalItem;

