import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Card, Searchbar, Chip } from "react-native-paper";
import { getProducts } from "../../lib/api";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(20).then((data) => setProducts(data.products));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.logo}>
          ShopEasy
        </Text>
      </View>

      <View style={{ height: 50 }}>
        <FlatList
          horizontal
          data={["For You", "Scenes", "Featured", "New"]}
          renderItem={({ item }) => (
            <Chip
              style={styles.chip}
              textStyle={{ color: "#fff" }}
              selectedColor="#fff"
            >
              {item}
            </Chip>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingTop: 20 },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: { color: "#fff", fontWeight: "bold" },
  chip: { backgroundColor: "#333", marginRight: 8, height: 35, marginLeft: 10 },
  row: { justifyContent: "space-between", paddingHorizontal: 10 },
  listContent: { paddingBottom: 20 },
});
