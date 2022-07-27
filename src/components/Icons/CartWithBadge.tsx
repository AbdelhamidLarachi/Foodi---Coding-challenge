import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function CartWithBadge({ backgroundColor = "white", color = "white", numberColor = "#1FD1B4", fontSize = 10, size = 23 }: any) {
    const productsNum = useSelector((state: RootState) => (Object.values(state.cart).filter(p => p.quantity)).length)

    return (
        <>
            <FontAwesome5
                name="shopping-basket"
                size={size}
                color={color} />
            {
                productsNum > 0 &&
                <View style={[styles.view, { backgroundColor }]}>
                    <Text style={[styles.text, { fontSize, color: numberColor }]}>{productsNum}</Text>
                </View>
            }
        </>
    )
}



const styles = StyleSheet.create({
    view: {
        padding: 2,
        height: 15,
        width: 15,
        borderRadius: 7.5,
        position: "absolute",
        right: 10,
        bottom: 12.5
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
    }
})