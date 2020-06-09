import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, FlatList, Picker} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
    const flatEl = useRef(null);

    const scrollEnd = () => {
        flatEl.current.scrollToEnd();
    };

    const [todos, setTodos] = useState([
        {id: "1", title: "Test", done: false},
        {id: "2", title: "Test2", done: false},
        {id: "3", title: "Test3", done: true},
        {id: "4", title: "Test4", done: false},
        {id: "5", title: "Test5", done: false}
    ]);

    const [filter, setFilter] = useState([
        {title: "Все дела", id: "1", select: true,  },
        {title: "Только завершенные", id: "2", select: false},
        {title: "Незавершенные", id: "3", select: false}
    ]);

    const acceptFilter = (number, arr) => {
        switch (number) {
            case "1":
                return arr;
            case "2":
                return arr.filter(({done}) => done === true);
            case "3":
                return arr.filter(({done}) => done === false);
            default: return arr;
        }
    }

    const getCurrentFilter = () => filter.find(item => item.select === true);

    const setCurrentFilter = value => setFilter([
        ...filter.map(item => {
            if (item.title === value) {
                item.select = true;
            } else {
                item.select = false;
            }

            return item;
    })]);

    const addTodo = title => setTodos( prevTodos => (
            [
                ...prevTodos,
                {
                    id: Date.now().toString(),
                    title
                }
            ]
    ));

    const changeDone = id => () => setTodos(
        [ ...todos.map(item => {
            if (item.id === id) {
                item.done = !item.done
            }

            return item
        })]
    );

    const delItem = id => () => setTodos([...todos.filter(item => item.id !== id)]);

    return (
        <View >
            <Navbar/>

            <View style={styles.container}>
                <AddTodo
                    isData={acceptFilter(getCurrentFilter().id, todos).length}
                    onSubmit={addTodo}
                    scrolling={scrollEnd}
                />

                {acceptFilter(getCurrentFilter().id, todos).length
                    ?<FlatList
                        data={acceptFilter(getCurrentFilter().id, todos)}
                        renderItem={({ item , index}) =>
                            <Todo
                                title={item.title}
                                done={item.done}
                                delItem={delItem(item.id)}
                                index={index+1}
                                checkSet={changeDone(item.id)}
                            />}
                        keyExtractor={item => item.id}
                        ref={flatEl}
                    />
                    : <Text style={styles.empty}>{"Список дел к сожалению пуст!!!"}</Text>
                }
            </View>

            <View style={styles.filter}>
                <Picker
                    selectedValue={getCurrentFilter().title}
                    style={{ height: 30, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setCurrentFilter(itemValue)}
                >
                    {filter.map(item => (
                        <Picker.Item label={item.title} value={item.title} key={item.id} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexBasis: "60%"
    },
    empty: {
        padding: 10,
        alignSelf: "center",
        marginTop: "60%"
    },
    filter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    }
});




