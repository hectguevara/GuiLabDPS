// CollectorItem.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { db } from "../utils/firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export default function CollectorItem({ collector }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(collector.name);
  const [location, setLocation] = useState(collector.location);

  const handleUpdate = async () => {
    try {
      const ref = doc(db, "collectors", collector.id);
      await updateDoc(ref, { name, location });
      setEditing(false);
      Alert.alert("Actualizado", "Colector actualizado correctamente");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo actualizar");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "collectors", collector.id));
      Alert.alert("Eliminado", "Colector eliminado");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo eliminar");
    }
  };

  return (
    <View style={styles.container}>
      {editing ? (
        <>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Nombre"
            style={styles.input}
          />
          <TextInput
            value={location}
            onChangeText={setLocation}
            placeholder="Ubicación"
            style={styles.input}
          />
          <Button title="Guardar" onPress={handleUpdate} />
          <Button title="Cancelar" onPress={() => setEditing(false)} />
        </>
      ) : (
        <>
          <Text>{collector.name} - {collector.location}</Text>
          <Button title="Editar" onPress={() => setEditing(true)} />
          <Button title="Eliminar" onPress={handleDelete} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 5
  }
});