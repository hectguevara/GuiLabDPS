import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { API_URL } from '../utils/config';

const DetalleClienteComponent = ({ route, navigation }) => {
  const { cliente } = route.params;

  const eliminarCliente = async () => {
    try {
      await fetch(`${API_URL}/${cliente.id}`, { method: 'DELETE' });
      navigation.goBack();
    } catch (error) {
      console.error('Error al eliminar cliente', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {Object.entries(cliente).map(([key, value]) => (
        <Text key={key} style={{ marginBottom: 5 }}>{`${key}: ${value}`}</Text>
      ))}
      <Button title="Eliminar Cliente" onPress={() =>
        Alert.alert("Confirmar", "¿Eliminar este cliente?", [
          { text: "Cancelar" },
          { text: "Sí", onPress: eliminarCliente }
        ])
      } />
    </View>
  );
};

export default DetalleClienteComponent;