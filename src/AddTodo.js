import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

export const AddTodo = ({ onSubmit, scrolling, isData }) => {
    const [value, setValue] = useState("");

    // const handleChange = ({ target: { value } }) => onChangeText(value);

    const handlePress = () => {
        if (value.trim()) {
            onSubmit(value);

            setValue("");

            if (isData) {
                scrolling();
            }
        } else {
            Alert.alert("Ошибка ввода.", "Название дела не может быть пустым!!!")
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                autoCorrect={false}
                onChangeText={setValue}
                style={styles.input}
                placeholder={"Введите..."}
                value={value}
            />

            <Button title={"Добавить"} onPress={handlePress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "15%",
        marginBottom: 5
    },
    input: {
        width: "60%",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "tomato",
        paddingBottom: 5,
        paddingLeft: 5

    }
});


