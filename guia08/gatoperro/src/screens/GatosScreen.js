import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const gatos = [
  { nombre: 'Persa', imagen: require('../assets/gatos/persa.jpg') },
  { nombre: 'Siamés', imagen: require('../assets/gatos/siames.jpg') },
  { nombre: 'Maine Coon', imagen: require('../assets/gatos/maine_coon.jpg') },
  { nombre: 'Bengala', imagen: require('../assets/gatos/bengala.jpg') },
  { nombre: 'Esfinge', imagen: require('../assets/gatos/esfinge.jpg') },
];

export default function GatosScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Razas de Gatos:</Text>
      {gatos.map((gato, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text>{gato.nombre}</Text>
          <Image source={gato.imagen} style={{ width: '50%', height: 200, borderRadius: 10 }} />
        </View>
      ))}
    </ScrollView>
  );
}
