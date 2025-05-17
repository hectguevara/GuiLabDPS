import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { API_URL } from '../utils/config';

const ListarClientesComponent = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);

  const cargarClientes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error('Error al cargar clientes', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', cargarClientes);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetalleCliente', { cliente: item })}>
            <Text style={{ marginBottom: 5 }}>{item.nombres} {item.apellidos}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListarClientesComponent;