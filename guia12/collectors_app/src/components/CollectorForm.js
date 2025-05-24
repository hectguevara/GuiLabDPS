// CollectorForm.js
import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { db } from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CollectorForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleAddCollector = async () => {
    if (!name || !location) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      await addDoc(collection(db, "collectors"), { name, location });
      Alert.alert("Éxito", "Colector agregado correctamente");
      setName("");
      setLocation("");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo agregar el colector");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre del colector"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Ubicación"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Agregar Colector" onPress={handleAddCollector} />
    </View>
  );
}