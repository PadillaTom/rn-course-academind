import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput({onPressHandler, onCancelPress, isVisible}) {
    const [inputText, setInputText] = useState('')

    function goalInputHandler(input) {
        setInputText(input)
    }

    return (
        <Modal
            visible={isVisible}
            animationType={'slide'}
        >
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                ></Image>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Enter Text'}
                    onChangeText={goalInputHandler}
                    clearButtonMode={"always"}
                    value={inputText}
                    placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title={'Add to List'}
                            onPress={() => {
                                onPressHandler(inputText);
                                setInputText('')
                            }}
                            color={'#5e0acc'}
                        ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title={'Cancel'}
                            onPress={() => onCancelPress()}
                            color={'#f31282'}
                        ></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#311b6b',
        padding: 32,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgray'
    },
    image: {
        width: 100,
        height: 100,
        margin: 16,
    },
    textInput: {
        width: '100%',
        padding: 8,
        color: 'white',
        letterSpacing: 0.5,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    buttonContainer: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    button: {
        width: 160,
        marginHorizontal: 8
    }
});

export default GoalInput;