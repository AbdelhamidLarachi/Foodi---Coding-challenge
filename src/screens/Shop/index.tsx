//
//  Shop Screen
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2022 AbdelhamidLarachi. All rights reserved.
//

import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import HorizontalScrollView from './HorizontalScrollView';
import Item from "./Item";
import SearchBar from "../../components/SearchBar";
import TabsView from "../../components/navigator/TabsView";
import { ScrollView } from "react-native-gesture-handler";


export default function Home({ navigation, route }: any) {

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Header />
				<SearchBar />
				<TabsView />
				<ScrollView style={styles.scrollview}>
					<HorizontalScrollView navigation={navigation} />
					<Item />
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: "7%"
	},
	scrollview: {
		height: "100%"
	}
})
