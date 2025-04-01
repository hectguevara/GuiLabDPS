import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const perros = [
  { nombre: 'Labrador', imagen: require('../assets/perros/labrador.jpg') },
  { nombre: 'Golden Retriever', imagen: require('../assets/perros/golden.jpg') },
  { nombre: 'Pastor Alemán', imagen: require('../assets/perros/pastor.jpg') },
  { nombre: 'Beagle', imagen: require('../assets/perros/Beagle.jpg') },
  { nombre: 'Pug', imagen: require('../assets/perros/pug.jpeg') },
];

export default function PerrosScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Razas de Perros:</Text>
      {perros.map((perro, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text>{perro.nombre}</Text>
          <Image source={perro.imagen} style={{ width: '50%', height: 200, borderRadius: 10 }} />
        </View>
      ))}
    </ScrollView>
  );
}
