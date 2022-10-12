import { Text, View, StyleSheet, SafeAreaView, Image, Switch} from 'react-native';
import React, { useState, isValidElement } from "react";

export default function App() {
    problemas = []
    const [isEnabledombro, setIsEnabledombro] = useState(false);
    const [textombro, setTextombro] = useState('')
    const toggleSwitchombro = () => {
      if (isEnabledombro) {
        setTextombro('')
      }
      else {
        setTextombro('Ombro')
      }

      setIsEnabledombro(previousState => !previousState)
    }

    const [isEnabledcostas, setIsEnabledcostas] = useState(false);
    const [textcostas, setTextcostas] = useState('')
    const toggleSwitchcostas = () => {
      if (isEnabledcostas) {
        setTextcostas('')
      }
      else {
        setTextcostas('Costas')
      }

      setIsEnabledcostas(previousState => !previousState)
    }

    const [isEnabledjoelho, setIsEnabledjoelho] = useState(false);
    const [textjoelho, setTextjoelho] = useState('')
    const toggleSwitchjoelho = () => {
      if (isEnabledjoelho) {
        setTextjoelho('')
      }
      else {
        setTextjoelho('Joelho')
      }

      setIsEnabledjoelho(previousState => !previousState)
    }

    
  return (
    <SafeAreaView>
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.paragraph}>Selecione o local da sua dor</Text>
          </View>
          <View style={styles.imgesqueleto}>
            <Image style={{}} source={require('./esqueletoo.png')}/>
          </View>
            <View style={styles.switchombro}>
            <View>
              <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledombro ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchombro}
              value={isEnabledombro}
              />
            </View>
            </View>
            <View style={styles.switchcostas}>
            <View>
              <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledcostas ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchcostas}
              value={isEnabledcostas}
              />
            </View>
            </View>
            <View style={styles.switchjoelho}>
            <View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledjoelho ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchjoelho}
              value={isEnabledjoelho}
              />
            </View>
            </View>
            <View style={{height: 100, width: '100%', justifyContent:'center', alignItems: 'center', marginTop: 60}}>
              <View style={{height: 40, width: 150, backgroundColor: '#fff', borderRadius: 10, justifyContent:'center', alignItems: 'center',}}>
              <Text style={{fontSize: 25}}>{textombro}</Text>
              </View>
              <View style={{height: 40, width: 150, backgroundColor: '#fff', marginTop: 8, borderRadius: 10, justifyContent:'center', alignItems: 'center',}}>
              <Text style={{fontSize: 25}}>{textcostas}</Text>
              </View>
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