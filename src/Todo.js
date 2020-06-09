import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from "./CheckBox";


export const Todo = ({title, done, index, checkSet, delItem}) => {
    const myIcon = <Icon name="trash" size={30} color="tomato" />;
    return (
        <View style={styles.todo}>
            <View style={styles.check}>
                <CheckBox
                    size={30}
                    selected={done}
                    onPress={checkSet}
                    style={{alignSelf: "center"}}
                />

                <Text style={styles.textDecor(done)}>{index}. {title}</Text>
            </View>

            <TouchableOpacity onPress={delItem}>
                <Text>
                    {myIcon}
                </Text>
             </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 10,
    },
    check: {
        flexDirection: "row",
        alignItems: "center"
    },
    textDecor(flag) {
        return flag
            ? {textDecorationLine: "line-through", color: "green"}
            : {color: "tomato"}
    }
});