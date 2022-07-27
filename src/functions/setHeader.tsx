import React from "react"
import { StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from "expo-constants";



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
        headerStatusBarHeight: Platform.OS == "ios" ? Constants.statusBarHeight + 20 : 20,
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
        marginTop: 20
    },

    goBackIcon: {
        padding: 10
    },
})


