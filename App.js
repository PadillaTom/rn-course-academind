import {useState} from "react"
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [inputText, setInputText] = useState({})
    const [items, setItems] = useState([])

    function goalInputHandler(input) {
        setInputText(input)
    }

    function addGoalHandler() {
        setItems((currentItems) => [...currentItems, {
            id: Math.random().toString(),
            name: inputText
        }]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    id='inputText'
                    style={styles.textInput}
                    placeholder={'Enter Text'}
                    onChangeText={goalInputHandler}
                    clearButtonMode={"always"}
                />
                <Button
                    title={'Add to List'}
                    onPress={addGoalHandler}
                ></Button>
            </View>
            <View style={styles.itemsContainer}>
                <FlatList
                    data={items}
                    renderItem={itemData => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.itemText}>{itemData.item.name}</Text>
                            </View>
                        )
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
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'lightgray',
        flex: 1,
        padding: 8
    },
    itemsContainer: {
        flex: 4
    },
    item: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    itemText: {
        color: 'white'
    }
});
