// App.js
import React from "react";
import { View, Text, ScrollView } from "react-native";
import LoginForm from "./src/components/LoginForm";
import RegisterForm from "./src/components/RegisterForm";
import CollectorForm from "./src/components/CollectorForm";
import CollectorList from "./src/components/CollectorList";

export default function App() {
  return (
    <ScrollView style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Gestión de Colectores</Text>
      <RegisterForm />
      <LoginForm />
      <CollectorForm />
      <CollectorList />
    </ScrollView>
  );
}