import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { getProductsByCategory } from "../../lib/api";
import ProductCard from "../../components/ProductCard";

export default function CategoryScreen({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(category).then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return <ActivityIndicator style={styles.centered} color="#fff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  centered: { flex: 1, justifyContent: "center", backgroundColor: "#000" },
  row: { justifyContent: "space-between", paddingHorizontal: 10 },
  list: { paddingTop: 15, paddingBottom: 20 },
});
