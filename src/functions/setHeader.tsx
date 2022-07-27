import React from "react"
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default (
    navigation: any,
    backgroundColor = "transparent",
    headerTitle = (() => <Text></Text>),
    headerLeft = (() =>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backArrow, styles.goBackIconView]}>
            <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.goBackIcon}
                size={23}
                color="#BDCEDA" />
        </TouchableOpacity>)
): void => {

    navigation.setOptions({
        headerStyle: [styles.headerStyle, { backgroundColor }],
        headerTitle,
        headerLeft
    });
}


const styles = StyleSheet.create({
    backArrow: {
        padding: 15,
        backgroundColor: "#F0F4FD",
        borderRadius: 10,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: "#BDCEDA",
    },
    goBackIconView: {
        marginLeft: 20,
        padding: 0
    },
    headerStyle: {
        shadowColor: 'transparent',
    },

    goBackIcon: {
        padding: 10
    },
})


