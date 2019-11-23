/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const gerarNumerosAleatorios = () => {
  let numeros_aleatorios = Math.random();

   numeros_aleatorios = Math.floor(numeros_aleatorios * 10);
  alert(numeros_aleatorios);
}


const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#cfe" />
      <View style={styles.container}>
        <Text style={styles.title}>Gerador de Numeros Randômicos</Text>
        <Button
        title="Gerar numeros Randômicos"
        onPress={gerarNumerosAleatorios}
        />
        <Text style={styles.title}>Marília Dev</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  }
});

export default App;
