import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, ScrollView, TouchableHighlight, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import uuid from "react-native-uuid";
import colors from "../utils/colors";

const Formulario = ({ reservas, setReservas, guardarMostrarForm, guardarReservasStorage }) => {
  const [nombre, guardarNombre] = useState("");
  const [fecha, guardarFecha] = useState(new Date());
  const [hora, guardarHora] = useState(new Date());
  const [cantidadPersonas, guardarCantidadPersonas] = useState("");
  const [seccion, guardarSeccion] = useState("No fumadores");

  // Estados para controlar pickers
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const crearNuevaReserva = () => {
    if (!nombre || !cantidadPersonas) {
      mostrarAlerta();
      return;
    }

    const reserva = { nombre, fecha, hora, cantidadPersonas, seccion, id: uuid.v4() };

    // Agregar al state
    const reservasNuevo = [...reservas, reserva];
    setReservas(reservasNuevo);

    // Guardar en storage
    guardarReservasStorage(JSON.stringify(reservasNuevo));

    // Ocultar formulario
    guardarMostrarForm(false);

    // Resetear formulario
    guardarNombre("");
    guardarCantidadPersonas("");
    guardarFecha(new Date());
    guardarHora(new Date());
    guardarSeccion("No fumadores");
  };

  const mostrarAlerta = () => {
    Alert.alert("Error", "Todos los campos son obligatorios", [{ text: "OK" }]);
  };

  return (
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={guardarNombre}
          value={nombre} />
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Button title="Seleccionar Fecha" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <DateTimePicker
            value={fecha}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) guardarFecha(selectedDate);
            }}
          />
        )}
        <Text>{fecha.toLocaleDateString()}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>
        <Button title="Seleccionar Hora" onPress={() => setShowTimePicker(true)} />
        {showTimePicker && (
          <DateTimePicker
            value={hora}
            mode="time"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) guardarHora(selectedTime);
            }}
          />
        )}
        <Text>{hora.toLocaleTimeString()}</Text>
      </View>
      <View>
        <Text style={styles.label}>Cantidad de Personas:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={guardarCantidadPersonas}
          value={cantidadPersonas} />
      </View>
      <View>
        <Text style={styles.label}>Sección:</Text>
        <Button
          title={seccion}
          onPress={() => guardarSeccion(seccion === "Fumadores" ? "No fumadores" : "Fumadores")}
        />
      </View>
      <View>
        <TouchableHighlight onPress={crearNuevaReserva} style={styles.btnSubmit}>
          <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderStyle: "solid"
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10
  },
  textoSubmit: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Formulario;