import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

export default function Footer({ calculate }) {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20, 
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});