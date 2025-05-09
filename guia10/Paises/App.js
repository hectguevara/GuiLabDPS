import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Formulario from "./src/components/Formulario";
import Pais from "./src/components/Pais";

export default function App() {
  const [busqueda, guardarbusqueda] = useState({ pais: '' });
  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});

  useEffect(() => {
    const { pais } = busqueda;

    const consultarPais = async () => {
      if (consultar) {
        try {
          // Consulta a API de IBGE
          const respuestaIBGE = await fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}`);
          const datosIBGE = await respuestaIBGE.json();

          // Consulta a REST Countries para obtener área y bandera
          const respuestaRest = await fetch(`https://restcountries.com/v3.1/alpha/${pais}`);
          const datosRest = await respuestaRest.json();

          const datosCombinados = {
            infoIBGE: datosIBGE,
            area: datosRest[0].area,
            bandera: datosRest[0].flags.png,
          };

          guardarresultado(datosCombinados);
        } catch (error) {
          mostrarAlerta();
        } finally {
          guardarconsultar(false);
        }
      }
    };

    consultarPais();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado, intenta con otro país', [{ text: 'Ok' }]);
  };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <View style={{ zIndex: 1000 }}>
          <Formulario
            busqueda={busqueda}
            guardarbusqueda={guardarbusqueda}
            guardarconsultar={guardarconsultar}
          />
        </View>
        <View style={{ zIndex: 1 }}>
          {resultado.infoIBGE && <Pais resultado={resultado} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'rgb(71, 149, 212)',
    flex: 1,
    justifyContent: "center",
  },
  contenido: {
    margin: '2.5%',
  },
});