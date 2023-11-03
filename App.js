import {Fragment, useState} from "react"
import {Button, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState([])

    function handleModalOpen() {
        setIsModalOpen(true)
    }

    function handleModalClose() {
        setIsModalOpen(false)
    }

    function addGoalHandler(inputText) {
        setItems((currentItems) => [...currentItems, {
            id: Math.random().toString(),
            name: inputText
        }]);
        handleModalClose()
    }

    function deleteGoalHandler(id) {
        setItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <Fragment>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <View style={styles.appContainer}>
                <Button title={'Add New Goal!'} color={'#5e0acc'} onPress={handleModalOpen}></Button>
                {isModalOpen && <GoalInput
                    isVisible={isModalOpen}
                    onPressHandler={addGoalHandler}
                    onCancelPress={handleModalClose}
                ></GoalInput>}
                <View style={styles.itemsContainer}>
                    <FlatList
                        data={items}
                        renderItem={itemData => {
                            return <GoalItem
                                item={itemData.item}
                                onDelete={deleteGoalHandler}
                            ></GoalItem>
                        }}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>
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
