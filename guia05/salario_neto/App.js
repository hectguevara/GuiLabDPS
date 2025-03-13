import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [salarioBase, setSalarioBase] = useState(null);
  const [salarioNeto, setSalarioNeto] = useState(null);

  const calcularSalarioNeto = () => {
    if (!nombre || !salarioBase) return;

    const isss = salarioBase * 0.03;
    const afp = salarioBase * 0.04;
    const renta = salarioBase * 0.05;
    const neto = salarioBase - (isss + afp + renta);

    setSalarioNeto(neto.toFixed(2));
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headApp}>Calculadora de Salario Neto</Text>
          <Form setNombre={setNombre} setSalarioBase={setSalarioBase} />
        </View>
        <View style={styles.content}>
          <Result nombre={nombre} salarioBase={salarioBase} salarioNeto={salarioNeto} />
        </View>
        <Footer calculate={calcularSalarioNeto} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});