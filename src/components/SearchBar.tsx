import React, { useState } from "react"
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


export default function SearchBar() {
    const [text, setText] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.leftSearch}>
                    <Ionicons
                        style={styles.icon}
                        name="search"
                        size={23}
                        color={"#1FD1B4"} />
                    <TextInput
                        onChangeText={setText}
                        placeholder="Search..."
                        style={styles.placeholder}
                        value={text} />
                </View>

                <TouchableOpacity style={styles.searchbar}>
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name="filter-menu"
                        size={18}
                        color="#BECEDA" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: "#F3F8FE",
        borderRadius: 15,
        flexDirection: "row"
    },
    placeholder: {
        marginLeft: "10%",
        width: "65%",
        fontSize: 16
    },
    searchbar: {
        width: 40,
        height: 40,
        backgroundColor: "#F0F7FD",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
        shadowColor: "#BECEDA",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    icon: {
        alignSelf: "center"
    },
    wrapper: {
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1,
        paddingHorizontal: "5%"
    },
    leftSearch: {
        flexDirection: "row",
    }

})