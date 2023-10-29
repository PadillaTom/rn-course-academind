import {Pressable, StyleSheet, Text, View} from "react-native";

function GoalItem(props) {
    const {
        item: {name, id},
        onDelete
    } = props
    return (
        <View style={styles.item}>
            <Pressable
                onPress={() => onDelete(id)}
                android_ripple={{
                    color: '#ddd'
                }}
                style={({pressed}) => pressed && styles.pressedAction}
            >
                <Text style={styles.itemText}>{name}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 8,

        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    itemText: {
        padding: 8,
        color: 'white'
    },
    pressedAction: {
        opacity: 0.3
    }
})

export default GoalItem;

