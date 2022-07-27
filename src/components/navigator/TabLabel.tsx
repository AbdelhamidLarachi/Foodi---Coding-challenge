import { Text, StyleSheet, View } from 'react-native';


export default function TabLabel({ label }: any) {
    return (
        <>
            <View style={styles.dot} />
            <Text style={styles.label}>{label}</Text>
        </>
    )
}


const styles = StyleSheet.create({
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#1FD1B4"
    },
    label: {
        color: "#1FD1B4",
        fontWeight: "500",
        marginTop: 5,
        fontSize: 12
    },
})