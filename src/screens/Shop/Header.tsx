import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import CartWithBadge from "../../components/Icons/CartWithBadge";


export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Foodi</Text>
            <TouchableOpacity style={styles.IconWrapper}>
                <CartWithBadge size={23} backgroundColor='#1FD1B4' color="#BECEDA" numberColor={"white"} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: "5%",
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        marginRight: "25%"
    },
    IconWrapper: {
        height: 60,
        width: 60,
        backgroundColor: "#F0F7FD",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16
    }

})