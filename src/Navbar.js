import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                {"TODO APP"}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        minHeight: "10%",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "tomato",
        paddingBottom: 10,
    },
    text: {
        color: "white",
        fontSize: 22
    }
})