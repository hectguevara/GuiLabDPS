import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Form({ setNombre, setSalarioBase }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        placeholder="Salario Base"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setSalarioBase(parseFloat(text) || 0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});