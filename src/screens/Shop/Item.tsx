import React from "react"
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Svg, { SvgProps, Path } from "react-native-svg"


import useDimensions from "../../functions/useDimensions"
const { h, w } = useDimensions();


const WizardIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 512 512"
        {...props}
    >
        <Path d="m450.596 125.669 32.974-97.218-97.223 32.97L304.074.022l1.312 102.651-83.817 59.267 98.031 30.482 30.477 98.024 59.272-83.811L512 207.945z" />
        <Path d="m290.462 221.56-39.383-12.247L10.684 449.708c-14.245 14.245-14.245 37.342 0 51.587 14.244 14.244 37.339 14.244 51.585 0l240.416-240.416-12.223-39.319zM280.323 379.063l25.789-25.788 25.79 25.79-25.789 25.788zM449.068 316.234l25.79-25.79 25.791 25.792-25.79 25.79zM97.938 208.842l25.792-25.792 25.792 25.792-25.792 25.792zM167.928 47.828l25.792-25.793 25.792 25.793L193.72 73.62z" />
    </Svg>
)


export default function Item() {

    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground
                imageStyle={styles.backgroundImage}
                source={require(`../../../assets/images/background/waves.png`)}
                resizeMode="cover"
                style={styles.bgImage}>
                <View style={styles.rowView}>
                    <Text style={styles.text}>Find healthy vegitables</Text>
                    <View style={styles.wizardIcon}>
                        <WizardIcon fill="#27D5BF" />
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        borderRadius: 20,
        backgroundColor: "#EEF5FD",
        padding: 15,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 20,
    },
    wizardIcon: {
        width: w(12),
        height: w(12),
        borderRadius: 25,
        backgroundColor: "#EEF5FD",
        borderWidth: 1,
        borderColor: "#E2ECF6",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    rowView: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
        width: "80%"
    },
    bgImage: {
        flex: 1,
        justifyContent: "center",
    },
    backgroundImage:
    {
        borderRadius: 25
    }
})