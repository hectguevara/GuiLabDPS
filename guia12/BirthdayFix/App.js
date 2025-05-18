import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, LogBox, View, Text } from 'react-native';
import Auth from './src/components/Auth';
import ListBirthday from './src/components/ListBirthday';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/utils/firebase';

LogBox.ignoreAllLogs(['Setting a timer']);

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (response) => {
      console.log('Estado de usuario detectado:', response);
      setUser(response);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    console.log("Esperando estado de autenticación...");
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <ListBirthday user={user} /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});