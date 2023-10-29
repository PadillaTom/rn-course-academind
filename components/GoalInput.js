import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput({onPressHandler}) {
    const [inputText, setInputText] = useState('')

    function goalInputHandler(input) {
        setInputText(input)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={'Enter Text'}
                onChangeText={goalInputHandler}
                clearButtonMode={"always"}
                value={inputText}
            />
            <Button
                title={'Add to List'}
                onPress={() => {
                    onPressHandler(inputText);
                    setInputText('')
                }}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
});

export default GoalInput;