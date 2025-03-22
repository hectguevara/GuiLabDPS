import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from "react-native";

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = React.useState(false);
  const [modalVisiblePlatillos, setModalVisiblePlatillos] = React.useState(false);
  const [modalVisibleRutas, setModalVisibleRutas] = React.useState(false);
  return (
    <>
    <ScrollView>

      <Modal transparent={true} animationType="slide" visible={modalVisiblePlaya} onRequestClose={() => {
        alert("Modal has been closed.");
      }}>
        <View style={styles.vistaModal}>
          <View style={styles.modal}>
            <Text style={styles.subtitulo}>Ir a la playa</Text>
            <Text>El Salvador es conocido por sus hermosas playas a nivel de Centroamérica</Text>
            <Button title="Cerrar" onPress={() => {setModalVisiblePlaya(!modalVisiblePlaya);}} />
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisiblePlatillos} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Pupusas</Text>
              <Text>El Salvador es mundialmente conocido por sus deliciosas Pupusas.</Text>
              <Button title="Cerrar" onPress={() => setModalVisiblePlatillos(!modalVisiblePlatillos)} />
            </View>
          </View>
        </Modal>

        <Modal transparent={true} animationType="slide" visible={modalVisibleRutas} onRequestClose={() => {}}>
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Rutas Turísticas</Text>
              <Text>Explora la Ruta de las Flores, El Boquerón, Suchitoto y más.</Text>
              <Button title="Cerrar" onPress={() => setModalVisibleRutas(!setModalVisibleRutas)} />
            </View>
          </View>
        </Modal>
      
      <View style={{ flexDirection: "row"}}>
        <Image
        style={StyleSheet.banner}
        source={require("./src/img/bg.jpg")}
        />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>¿Qué hacer en El Salvador?</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={() => {setModalVisiblePlaya(!modalVisiblePlaya);}}>
            <Image
            style={styles.ciudad}
            source={require("./src/img/actividad1.jpg")}
            />
            </TouchableHighlight>
          </View>

          <View>
            <Image
            style={styles.ciudad}
            source={require("./src/img/actividad2.jpg")}
            />
          </View>

          <View>
            <Image
            style={styles.ciudad}
            source={require("./src/img/actividad3.jpg")}
            />
          </View>

          <View>
            <Image
            style={styles.ciudad}
            source={require("./src/img/actividad4.jpg")}
            />
          </View>

          <View>
            <Image
            style={styles.ciudad}
            source={require("./src/img/actividad5.jpg")}
            />
          </View>

        </ScrollView>

        <Text style={styles.titulo}>Platillos Salvadoreños</Text>
      <View>
        <View>
        <TouchableHighlight onPress={() => {setModalVisiblePlatillos(!modalVisiblePlatillos);}}>
          <Image
          style={styles.banner}
          source={require("./src/img/mejores1.jpg")}
          />
          </TouchableHighlight>
        </View>
        <View>
          <Image
          style={styles.banner}
          source={require("./src/img/mejores2.jpg")}
          />
        </View>
        <View>
          <Image
          style={styles.banner}
          source={require("./src/img/mejores3.jpg")}
          />
        </View>
      </View>

      <Text style={styles.titulo}>Rutas Turisticas</Text>
      <View style={styles.listado}>
        <View style={styles.listadoItem}>
        <TouchableHighlight onPress={() => {setModalVisibleRutas(!modalVisibleRutas);}}>
          <Image
          style={styles.mejores}
          source={require("./src/img/ruta1.jpg")} />
          </TouchableHighlight>
        </View>
        <View style={styles.listadoItem}>
          <Image
          style={styles.mejores}
          source={require("./src/img/ruta2.jpg")} />
        </View>
        <View style={styles.listadoItem}>
          <Image
          style={styles.mejores}
          source={require("./src/img/ruta3.jpg")} />
        </View>
        <View style={styles.listadoItem}>
          <Image
          style={styles.mejores}
          source={require("./src/img/ruta4.jpg")} />
        </View>
      </View>


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
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  listadoItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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