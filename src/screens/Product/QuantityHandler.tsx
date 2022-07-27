import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../app/slices/cart'
import { RootState } from "../../app/store";


{/* QuantityHandler Component */ }
export default function QuantityHandler({ product, padding = 14 }: any) {
    
    const quantity = useSelector((state: RootState) => state.cart[product.id].quantity)
	const dispatch = useDispatch()


    return (
        <View style={styles.quantityControl}>
            <TouchableOpacity onPress={() => dispatch(decrement(product.id))} style={[styles.minus, { padding }]}>
                <FontAwesome name="minus" size={16} color="#BDCEDA" />
            </TouchableOpacity>
            <Text style={styles.number}>{quantity}</Text>
            <TouchableOpacity onPress={() => dispatch(increment(product.id))} style={[styles.plus, { padding }]}>
                <FontAwesome name="plus" size={16} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    quantityControl: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    minus: {
        padding: 14,
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
    plus: {
        padding: 14,
        backgroundColor: "#05D8BB",
        borderRadius: 10,
        borderColor: "#EFF6FD",
        borderWidth: 4
    },
    number: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 20
    }
})