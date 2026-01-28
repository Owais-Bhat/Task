import { FlatList, View, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => <ProductCard item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
  },
});
