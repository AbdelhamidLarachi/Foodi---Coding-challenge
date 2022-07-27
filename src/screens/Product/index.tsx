//
//  Product Screen
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2022 AbdelhamidLarachi. All rights reserved.
//

import React, { useLayoutEffect } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import GradientScrollView from "../../components/GradientScrollView";
import QuantityHandler from "./QuantityHandler";
import setHeader from "../../functions/setHeader";




export default function Product({ navigation, route }: any) {

	/* Get product params */
	const { img, name, price } = route.params.product;



	// Customized header
	useLayoutEffect(() => {
		setHeader(navigation, "#EEF3F7");
	}, []);


	const checkout = () => {
		navigation.navigate("Cart")
	}


	return (
		<>
			{/* Background view */}
			<View style={styles.background}>
				<Image style={styles.image} source={img} />
			</View>
			{/* Body view */}
			<View style={styles.body}>
				{/* Body header */}
				<View style={styles.productHeader}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.price}>£{price.toFixed(2)}</Text>
				</View>

				{/* Paragraph ScrollView */}
				<GradientScrollView />

				{/* Cart Component */}
				<View style={styles.container}>
					<QuantityHandler product={route.params.product} />
					<TouchableOpacity onPress={checkout} style={styles.viewCart}>
						<Text style={styles.viewCartText}>View cart</Text>
						<MaterialIcons name="arrow-forward-ios" size={17} color="#BDCEDA" />
					</TouchableOpacity>
				</View>

			</View>
		</>
	)
}



const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: "35%",
		borderBottomLeftRadius: 170,
		borderBottomRightRadius: 170,
		backgroundColor: "#EEF3F7",
		alignItems: "center",
		justifyContent: "center"
	},
	image: {
		width: "100%",
		height: "80%",
		resizeMode: "contain"
	},
	productHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold"
	},

	price: {
		fontSize: 24,
		fontWeight: "500"
	},
	body: {
		paddingHorizontal: "7%",
		paddingVertical: "7%"
	},
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
	headerStyle: {
		backgroundColor: "#EEF3F7",
		shadowColor: 'transparent',
	},
	goBackIconView: {
		marginLeft: 20,
		padding: 0
	},
	goBackIcon: {
		padding: 10
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: "10%"
	}, 
	viewCart: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#F0F4FD",
		alignItems: "center",
		borderRadius: 10,
		width: "40%",
		paddingHorizontal: '5%',
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 1,
		shadowRadius: 2,
		shadowColor: "#BDCEDA",
	},
	viewCartText: {
		color: "#85898C",
		fontSize: 15,
		fontWeight: "500"
	},
})
