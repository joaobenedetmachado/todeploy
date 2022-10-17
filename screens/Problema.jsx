import { Text, View, StyleSheet, SafeAreaView, Image, Switch} from 'react-native';
import React, { useState, isValidElement } from "react";
import { Button } from 'react-native-paper'
import Constants from 'expo-constants';

export default function Problema() {

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.paragraph}>Selecione o local da sua dor</Text>
          </View>
          <View style={styles.imgesqueleto}>
            <Image style={{}} source={require('./esqueleto.png')}/>
          </View>
            <Button style={styles.switchombro}>ombro</Button>
            <Button style={styles.switchcostas}>costas</Button>
            <Button style={styles.switchjoelho}>joelho</Button>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29abac',
    height: '100%',
    width: '100%'
  },
  paragraph: {
    color: "#ffffff",
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'bold',
  },
  header : {
    height : 80,
    backgroundColor: '#000000',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
  },
  imgesqueleto : {
    marginTop: 45,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  switchombro : {
    marginTop: 50,
    marginLeft: 110,
  },
  switchcostas : {
    marginTop: 55,
    marginLeft: 150,
  },
  switchjoelho : {
    marginTop: 150,
    marginLeft: 127,
  }
});