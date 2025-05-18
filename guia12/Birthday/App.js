import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, LogBox, View, Text } from 'react-native';
import base64 from 'react-native-base64';
import Auth from './src/components/AuthScreen';
import { auth } from './src/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import ListBirthday from './src/components/ListBirthday';

function btoa(data) {
  return new base64(data, "binary").toString("base64");
}

function atob(data) {
  return new base64(data, "base64").toString("binary");
}

LogBox.ignoreAllLogs(['Setting a timer']);

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (response) => {
      setUser(response);
    });

    return () => unsubscribe(); // Limpia el listener al desmontar
  }, []);

  if (user === undefined) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cargando...</Text>
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