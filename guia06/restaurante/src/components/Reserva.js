import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const Reserva = ({ item, eliminarReserva }) => {
  const dialogoEliminar = id => {
    console.log('Eliminando...', id);
    eliminarReserva(id);
  };

  return (
    <View style={styles.reserva}>
      <View>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.texto}>{item.nombre}</Text>
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.texto}>{item.fecha.toLocaleDateString()}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>
        <Text style={styles.texto}>{item.hora.toLocaleTimeString()}</Text>
      </View>
      <View>
        <Text style={styles.label}>Cantidad de Personas:</Text>
        <Text style={styles.texto}>{item.cantidadPersonas}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sección:</Text>
        <Text style={styles.texto}>{item.seccion}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(item.id)}
          style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reserva: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  texto: {
    fontSize: 18
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Reserva;