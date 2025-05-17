import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioComponent from './src/components/InicioComponent';
import ListarClientesComponent from './src/components/ListarClientesComponent';
import AgregarClienteComponent from './src/components/AgregarClienteComponent';
import DetalleClienteComponent from './src/components/DetalleClienteComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={InicioComponent} />
        <Stack.Screen name="ListarClientes" component={ListarClientesComponent} />
        <Stack.Screen name="AgregarCliente" component={AgregarClienteComponent} />
        <Stack.Screen name="DetalleCliente" component={DetalleClienteComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}