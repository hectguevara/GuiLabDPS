import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from "react-native";

const App = () => {
  const [modalVisibleHabitacionBarata, setModalVisibleHabitacionBarata] = React.useState(false);
  const [modalVisibleHabitacionMedia, setModalVisibleHabitacionMedia] = React.useState(false);
  const [modalVisibleHabitacionCara, setModalVisibleHabitacionCara] = React.useState(false);

  const [modalVisiblePlayaTunco, setModalVisiblePlayaTunco] = React.useState(false);
  const [modalVisibleSuchitoto, setModalVisibleSuchitoto] = React.useState(false);
  const [modalVisibleBoqueron, setModalVisibleBoqueron] = React.useState(false);

  const [modalVisibleServicios, setModalVisibleServicios] = React.useState(false);

  return (
    <>
      <ScrollView>
        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacionBarata} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Habitación Económica</Text>
              <Text>- Precio: $50 por noche</Text>
              <Text>- Cama individual</Text>
              <Text>- Baño compartido</Text>
              <Text>- Wi-Fi gratis</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleHabitacionBarata(!modalVisibleHabitacionBarata)} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacionMedia} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Habitación Estándar</Text>
              <Text>- Precio: $80 por noche</Text>
              <Text>- Cama doble</Text>
              <Text>- Baño privado</Text>
              <Text>- Aire acondicionado</Text>
              <Text>- Wi-Fi gratis</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleHabitacionMedia(!modalVisibleHabitacionMedia)} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleHabitacionCara} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Habitación Premium</Text>
              <Text>- Precio: $120 por noche</Text>
              <Text>- Cama King Size</Text>
              <Text>- Baño privado con jacuzzi</Text>
              <Text>- Balcón con vista al mar</Text>
              <Text>- Aire acondicionado</Text>
              <Text>- Wi-Fi gratis</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleHabitacionCara(!modalVisibleHabitacionCara)} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleServicios} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Servicios del Hotel</Text>
              <Text>- Piscina</Text>
              <Text>- Restaurante</Text>
              <Text>- Gimnasio</Text>
              <Text>- Wi-Fi Gratis</Text>
              <Text>- Estacionamiento</Text>
              <Text>- Servicio de habitaciones</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleServicios(!modalVisibleServicios)} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisiblePlayaTunco} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Playa El Tunco</Text>
              <Text>- Ubicación: La Libertad</Text>
              <Text>- Conocida por sus olas para surfear.</Text>
              <Text>- Ambiente relajado y bares en la playa.</Text>
              <Button title="Cerrar" onPress={() => setModalVisiblePlayaTunco(!modalVisiblePlayaTunco)} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleSuchitoto} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Suchitoto</Text>
              <Text>- Ubicación: Cuscatlán</Text>
              <Text>- Pueblo colonial con calles empedradas.</Text>
              <Text>- Conocido por su arte y cultura.</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleSuchitoto(!modalVisibleSuchitoto)} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleBoqueron} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>El Boquerón</Text>
              <Text>- Ubicación: San Salvador</Text>
              <Text>- Volcán con un cráter impresionante.</Text>
              <Text>- Ideal para caminatas y disfrutar de la naturaleza.</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleBoqueron(!modalVisibleBoqueron)} />
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={require("./src/img/hotel_banner.jpg")} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Tipos de Habitaciones</Text>
          <ScrollView horizontal>
            <TouchableHighlight onPress={() => setModalVisibleHabitacionBarata(!modalVisibleHabitacionBarata)}>
              <Image style={styles.ciudad} source={require("./src/img/habitacion1.jpg")} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setModalVisibleHabitacionMedia(!modalVisibleHabitacionMedia)}>
              <Image style={styles.ciudad} source={require("./src/img/habitacion2.jpg")} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setModalVisibleHabitacionCara(!modalVisibleHabitacionCara)}>
              <Image style={styles.ciudad} source={require("./src/img/habitacion3.jpg")} />
            </TouchableHighlight>
          </ScrollView>

          <Text style={styles.titulo}>Servicios del Hotel</Text>
          <TouchableHighlight onPress={() => setModalVisibleServicios(!modalVisibleServicios)}>
            <Image style={styles.banner} source={require("./src/img/servicios.jpg")} />
          </TouchableHighlight>

          <Text style={styles.titulo}>Lugares de Interés Cerca de TI</Text>
          <ScrollView horizontal>
            <TouchableHighlight onPress={() => setModalVisiblePlayaTunco(!modalVisiblePlayaTunco)}>
              <Image style={styles.ciudad} source={require("./src/img/lugar1.jpeg")} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setModalVisibleSuchitoto(!modalVisibleSuchitoto)}>
              <Image style={styles.ciudad} source={require("./src/img/lugar2.jpg")} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setModalVisibleBoqueron(!modalVisibleBoqueron)}>
              <Image style={styles.ciudad} source={require("./src/img/lugar3.jpg")} />
            </TouchableHighlight>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  vistaModal: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
});

export default App;