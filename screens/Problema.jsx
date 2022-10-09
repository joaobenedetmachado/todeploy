import { Text, View, StyleSheet, SafeAreaView, Image, Switch} from 'react-native';
import React, { useState } from "react";

import CardS from "./CardS"


export default function Problema() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.paragraph}>Selecione o local da sua dor</Text>
          </View>
          <View style={styles.imgesqueleto}>
            <Image source={require('./esqueleto.png')}/>
          </View>
            <View style={styles.switchombro}>
            <CardS/>
            </View>
            <View style={styles.switchcostas}>
            <CardS/>
            </View>
            <View style={styles.switchjoelho}>
            <CardS/>
            </View>
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
    height : 120,
    backgroundColor: '#000000',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
  },
  imgesqueleto : {
    marginTop: 80,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  switchombro : {
    marginTop: 75,
    marginLeft: 100,
  },
  switchcostas : {
    marginTop: 95,
    marginLeft: 150,
  },
  switchjoelho : {
    marginTop: 200,
    marginLeft: 120,
  }
});