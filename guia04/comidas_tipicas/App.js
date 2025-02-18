import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import { Card } from "react-native-elements";

const DATA = [
  {
    id: "1",
    name: "Pupusas",
    calories: "350 kcal por unidad",
    image: require("./src/img/pupusas.jpg"),
  },
  {
    id: "2",
    name: "Yuca Frita",
    calories: "250 kcal por porción",
    image: require("./src/img/yuca.jpg"),
  },
  {
    id: "3",
    name: "Tamales",
    calories: "300 kcal por unidad",
    image: require("./src/img/tamales.jpg"),
  },
];

const FoodCard = ({ name, calories, image }) => (
  <Card>
    <Card.Title>{name}</Card.Title>
    <Card.Divider />
    <Card.Image source={image} style={styles.image} />
    <Card.FeaturedSubtitle style={styles.calories}>{calories}</Card.FeaturedSubtitle>
  </Card>
);

export default function App() {
  const renderItem = ({ item }) => (
    <FoodCard name={item.name} calories={item.calories} image={item.image} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <text style={styles.title}>Comidas típicas salvadoreñas y sus Calorías</text>
      <FlatList 
      data={DATA} 
      renderItem={renderItem} 
      keyExtractor={(item) => item.id} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Times New Roman",
    color:"gray",
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "cover",
    marginLeft: "auto",
    marginRight: "auto",
  },
  calories: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
    textAlign: "center",
  },
});
