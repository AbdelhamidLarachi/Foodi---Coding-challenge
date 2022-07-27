import React from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IProduct from "../../types/Product";
import products from "../../data/products";



export default function HorizontalScrollView({ navigation }: any) {


    const goToProduct = (product: IProduct) => {
        navigation.navigate("Product", { product })
    }


    return (
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
            {products.map(p => (
                <TouchableOpacity style={styles.card} onPress={() => goToProduct(p)}>
                    <Image
                        style={styles.image}
                        source={p.img}
                    />
                    <View style={styles.info}>
                        <Text style={styles.category}>{p.category}</Text>
                        <Text style={styles.name}>{p.name}</Text>
                        <View style={styles.cartView}>
                            <Text style={[styles.name, { alignSelf: "flex-end" }]}>
                                £{p.price.toFixed(2)}
                            </Text>
                            <TouchableOpacity style={styles.cartIcon}>
                                <MaterialCommunityIcons name="cart-outline" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        paddingVertical: 20
    },
    card: {
        height: 250,
        width: 170,
        backgroundColor: "#EDF4FC",
        borderRadius: 10,
        marginRight: 20,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 5,
        shadowRadius: 3,
        elevation: 10,
        shadowColor: "#BECEDA",
    },
    image: {
        alignSelf: "flex-end",
        width: "80%",
        height: "50%",
        resizeMode: "contain",
        transform: [
            { scaleX: -1 }
        ],
    },
    category: {
        fontSize: 13,
        color: "#C7D4DD",
        marginBottom: "2%"
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: "4%",
    },
    cartView: {
        flexDirection: "row",
        justifyContent: "space-between",
        //alignItems: "center"
    },
    cartIcon: {
        backgroundColor: "#1ED7B8",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        padding: 5,
    },
    info: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 10
    }
})
