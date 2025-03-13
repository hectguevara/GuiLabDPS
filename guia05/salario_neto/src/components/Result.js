import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Result({ nombre, salarioBase, salarioNeto }) {
  return (
    <View style={styles.content}>
      {salarioNeto && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resultado</Text>
          <DataResult title="Nombre:" value={nombre} />
          <DataResult title="Salario base:" value={`$${salarioBase}`} />
          <DataResult title="Salario neto:" value={`$${salarioNeto}`} />
        </View>
      )}
    </View>
  );
}

function DataResult({ title, value }) {
  return (
    <View style={styles.value}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxResult: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
});