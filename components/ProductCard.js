import { StyleSheet, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function ProductCard({ item }) {
  const router = useRouter();

  return (
    <Card
      style={styles.card}
      onPress={() => router.push(`/product/${item.id}`)}
    >
      <Card.Cover source={{ uri: item.thumbnail }} style={styles.image} />
      <Card.Content style={styles.overlay}>
        <Text variant="titleMedium" style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text variant="bodySmall" style={styles.subtitle}>
          {item.brand} | ${item.price}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 15,
    marginBottom: 15,
    backgroundColor: "#1a1a1a",
    overflow: "hidden",
    borderRadius: 15,
  },
  image: {
    height: 180,
    borderRadius: 15,
  },
  overlay: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#aaa",
  },
});
