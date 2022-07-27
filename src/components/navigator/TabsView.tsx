import React, { useState } from "react"
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProductCategory } from "../../types/Product";


const routes: string[]  = ["All", ...Object.values(ProductCategory)]

export default function TabsView() {
  const [route, setRoute] = useState("All");

  return (
      <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        {routes.map(r => (
          <TouchableOpacity onPress={() => setRoute(r)} style={[{ marginRight: 10 }, r == route && styles.bottomBorder]}>
            <Text style={
              r == route
                ? styles.selected
                : styles.unselected}>
              {r}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
     height: 80
  },
  selected: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1FD1B4"
  },
  bottomBorder: {
    borderBottomColor: "#1FD1B4",
    borderBottomWidth: 2,
    borderColor: "#1FD1B4"
  },
  unselected: {
    fontSize: 16,
    color: "#BECEDA"
  },
})

