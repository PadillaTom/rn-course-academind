import {useState} from "react"
import {FlatList, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [items, setItems] = useState([])

    function addGoalHandler(inputText) {
        setItems((currentItems) => [...currentItems, {
            id: Math.random().toString(),
            name: inputText
        }]);
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput
                onPressHandler={addGoalHandler}
            ></GoalInput>
            <View style={styles.itemsContainer}>
                <FlatList
                    data={items}
                    renderItem={itemData => {
                        return <GoalItem name={itemData.item.name}></GoalItem>
                    }}
                    keyExtractor={item => item.id}
                >
                </FlatList>
            </View>
        </View>
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
