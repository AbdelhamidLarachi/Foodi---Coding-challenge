//
//  Profile Screen
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2022 AbdelhamidLarachi. All rights reserved.
//

import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function Home({ navigation, route }: any) {


    const onButtonPress = () => {

    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
            <Text style={styles.text}>PROFILE</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        marginTop: "10%"
    },
    text: {
        color: "white",
        padding: 20
    }
})
