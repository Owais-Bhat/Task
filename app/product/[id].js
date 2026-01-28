import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import {
  Text,
  ActivityIndicator,
  Button,
  Card,
  Divider,
} from "react-native-paper";
import { getProductById } from "../../lib/api";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating={true} color="#fff" size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: product.title,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#000" },
        }}
      />

      <Card style={styles.card} mode="contained">
        <Card.Cover source={{ uri: product.thumbnail }} style={styles.image} />

        <Card.Content style={styles.content}>
          <View style={styles.headerRow}>
            <Text variant="headlineSmall" style={styles.title}>
              {product.title}
            </Text>
            <Text variant="headlineSmall" style={styles.price}>
              ${product.price}
            </Text>
          </View>

          <Text variant="labelLarge" style={styles.brand}>
            {product.brand}
          </Text>

          <Divider style={styles.divider} />

          <Text variant="bodyLarge" style={styles.desc}>
            {product.description}
          </Text>

          <View style={styles.stats}>
            <Text style={styles.statItem}>⭐ {product.rating}</Text>
            <Text style={styles.statItem}>📦 Stock: {product.stock}</Text>
          </View>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            buttonColor="#fff"
            textColor="#000"
            style={styles.button}
            onPress={() => console.log("Added to cart")}
          >
            Add to Cart
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  card: {
    backgroundColor: "#000",
    margin: 0,
  },
  image: {
    height: 350,
    borderRadius: 0,
  },
  content: {
    paddingTop: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
  },
  price: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  brand: {
    color: "#aaa",
    textTransform: "uppercase",
    marginTop: 4,
  },
  divider: {
    marginVertical: 15,
    backgroundColor: "#333",
  },
  desc: {
    color: "#ccc",
    lineHeight: 24,
  },
  stats: {
    flexDirection: "row",
    marginTop: 15,
  },
  statItem: {
    color: "#888",
    marginRight: 20,
  },
  actions: {
    padding: 16,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 4,
  },
});
