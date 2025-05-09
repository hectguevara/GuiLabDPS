import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const Pais = ({ resultado }) => {
  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState("");
  const [capital, setcapital] = useState("");
  const [region, setregion] = useState("");
  const [lengua, setlengua] = useState([]);

  useEffect(() => {
    if (!resultado || !resultado.infoIBGE) return;

    setinfo(resultado.infoIBGE);
    let lenguasTemp = [];

    Object.values(resultado.infoIBGE).forEach((e) => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      Object.values(e.linguas).forEach((l) => {
        lenguasTemp.push(l.nome);
      });
    });

    setlengua(lenguasTemp);
  }, [resultado]);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{nombre}</Title>
        <Paragraph>Capital: {capital}</Paragraph>
        <Paragraph>Región: {region}</Paragraph>
        <Paragraph>Lenguas: {lengua.join(", ")}</Paragraph>
        <Paragraph>Área: {resultado.area.toLocaleString()} km²</Paragraph>
        <Image
          source={{ uri: resultado.bandera }}
          style={styles.bandera}
          resizeMode="contain"
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  bandera: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Pais;