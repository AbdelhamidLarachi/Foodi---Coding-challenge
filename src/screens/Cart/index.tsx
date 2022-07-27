//
//  Favorites Screen
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2022 AbdelhamidLarachi. All rights reserved.
//


import React, { useEffect, useLayoutEffect } from "react"
import { ScrollView, StyleSheet, Text, Image, View, SafeAreaView } from "react-native"
import QuantityHandler from "../Product/QuantityHandler";
import setHeader from "../../functions/setHeader";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { RootState } from "../../app/store";
import useDiscount from "../../functions/useDiscount";
import IProduct from "../../types/Product";


export default function Cart({ navigation }: any) {

	const cart = useSelector((state: RootState) => state.cart)

	

	// Customized header
	useLayoutEffect(() => {
		setHeader(
			navigation,
			"transparent",
			() => (
				<Text style={{ fontWeight: "bold", fontSize: 20 }}>
					Cart
					<Ionicons name="cart-outline" size={24} color="black" />
				</Text>
			)
		);
	}, []);



	const CheckoutInfo = ({ title, total }: { title: string, total: number }) => {

		return (
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.total}>£{total.toFixed(2)}</Text>
			</View>
		)
	}


	const discount = () => {
		return useDiscount(cart).reduce(
			(prev: any, n: any) => prev + n.discount,
			0
		);
	}


	const total = () => {
		return useDiscount(cart).reduce(
			(prev: any, { total }: any) => prev + total,
			0
		);
	}


	const subTotal = () => {
		return useDiscount(cart).reduce(
			(prev: any, { price, quantity }: any) => prev + (price * quantity),
			0
		);
	}


	return (
		<SafeAreaView>
			<ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false}>
				{
					useDiscount(cart).map((p: IProduct) => (
						<View style={styles.card}>
							<Image
								style={styles.image}
								source={p.img}
							/>
							<View style={styles.info}>
								<Text style={styles.name}>{p.name}</Text>
								<QuantityHandler product={p} padding={7} />
							</View>
							<View style={styles.discountWrapper}>
								{(p.discount > 0) && <Text style={styles.discount}>£{p.discount}</Text>}
								{p.give && <Text style={[styles.discount, { textDecorationLine: "none" }]}>{p.give} Free</Text>}
								<View style={styles.priceCircle}>
									<Text>£{p.price.toFixed(2)}</Text>
								</View>
							</View>
						</View>
					))
				}
				<View style={styles.divider} />
				<View style={styles.checkout}>
					<CheckoutInfo title="Subtotal" total={subTotal()} />
					<CheckoutInfo title="Discount" total={-discount()} />
					<CheckoutInfo title="Total" total={total()} />
				</View>
			</ScrollView>

		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	scrollView: {
		paddingHorizontal: 20,
		marginTop: "10%",
		height: "100%"
	},
	card: {
		flexDirection: "row",
		justifyContent: "space-between",
		height: 130,
		backgroundColor: "#EDF4FC",
		borderRadius: 10,
		marginBottom: 20,
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
		alignSelf: "flex-start",
		width: "30%",
		height: "90%",
		resizeMode: "contain",
	},
	priceCircle: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		marginRight: "5%"
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: "10%",
	},
	info: {
		alignSelf: "center"
	},
	divider:
	{
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	checkout: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 30
	},
	title: {
		fontSize: 16,
		fontWeight: "500",
		color: "#515151",
		textAlign: "center"
	},
	total: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: "10%"
	},
	empty: {
		alignSelf: "center",
		justifyContent: "center",
		marginVertical: "20%"
	},
	discountWrapper: {
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
	},
	discount: {
		marginBottom: "10%",
		color: "red",
		fontWeight: "bold",
		textDecorationLine: "line-through"
	}

})
