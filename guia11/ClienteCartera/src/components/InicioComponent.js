import React from 'react';
import { View, Button } from 'react-native';

const InicioComponent = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <Button title="Listar Clientes" onPress={() => navigation.navigate('ListarClientes')} />
      <Button title="Agregar Cliente" onPress={() => navigation.navigate('AgregarCliente')} />
    </View>
  );
};

export default InicioComponent;