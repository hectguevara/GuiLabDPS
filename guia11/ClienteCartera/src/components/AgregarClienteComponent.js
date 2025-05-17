import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView } from 'react-native';
import { API_URL } from '../utils/config';

const AgregarClienteComponent = ({ navigation }) => {
  const [cliente, setCliente] = useState({
    nombres: '',
    apellidos: '',
    direccionPostal: '',
    direccionTrabajo: '',
    telefono: '',
    correo: '',
    nivelEconomico: '',
    posibilidadesCompra: '',
    intereses: ''
  });

  const guardarCliente = async () => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente)
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error al guardar cliente', error);
    }
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      {Object.keys(cliente).map((key) => (
        <TextInput
          key={key}
          placeholder={key}
          value={cliente[key]}
          onChangeText={(value) => setCliente({ ...cliente, [key]: value })}
          style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
        />
      ))}
      <Button title="Guardar Cliente" onPress={guardarCliente} />
    </ScrollView>
  );
};

export default AgregarClienteComponent;