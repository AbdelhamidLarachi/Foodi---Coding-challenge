import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"


{/* Paragraph ScrollView */ }
export default function GradientScrollView() {
    return (
        <View style={{ height: "56%" }}>
            <ScrollView style={styles.scrollview}>
                <Text style={styles.paragraph}>
                    Monstera deliciosa, commonly called split-leaf philodendron or swiss cheese plant, is native to Central America. It is a climbing, evergreen perennial vine that is perhaps most noted for its large perforated leaves on thick plant stems and its long cord-like aerial roots. In its native tropical habitat, it will climb somewhat impressively to 70’ into large trees, clothing the trunks with leaves in the 1-3’ long range. Indoor plants more typically are grown in the 6-8’ range. Mature leaves of this plant are very large, glossy, deep green and distinctively cut and perforated. Juvenile leaves are small and mostly uncut. Mature plants may produce arum-like flowers with a spadix to 10” surrounded by a white spathe. Flowers give way to an edible fruit that is reminiscent in taste to pineapple-banana. Indoor plants rarely flower and fruit however. Aerial roots on the lower parts of this plant can be rooted into the soil to help nourish the plant. Aerial roots on the upper parts of the plant can be attached to a moss-like climbing pole or simply removed.  The origin of the genus name is somewhat obscure, but is thought to derive from Dracontium, the name Linnaeus assigned to this group of plants. Monstera is first found in a published work in 1763 as a revision of Linnaeus but no record is given as to why that particular name was chosen. However, the practice of naming aroids after snakes, dragons, and monsters was fairly common.  Specific epithet means delicious for the delicious, edible fruit.  Common name is in reference to the perforated foliage. Although not a philodendron, this plant is commonly called split-leaf philodendron.
                </Text>
            </ScrollView>
            <LinearGradient
                // Bottom Linear Gradient
                colors={['white', '#E2E9EF']}
                style={styles.linearGradient}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        marginVertical: "7%",
    },
    paragraph: {
        fontSize: 14,
        color: "#969696",
        textAlign: 'justify',
        lineHeight: 20,
    },
    linearGradient: {
        borderRadius: 5,
        width: "100%",
        height: "30%",
        position: "absolute",
        bottom: 20,
        opacity: 0.5
    }
})