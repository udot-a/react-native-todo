import React from "react";
import {Text, StyleSheet, ScrollView, FlatList, View} from "react-native";
import * as Constants from "expo-constants";

export const List = ({todos}) => {
    function Item({ title }) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    if (!todos.length) {
        return (
            <Text >Список пуст!!!</Text>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
    empty: {

        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});