import { Text, View, StyleSheet, SafeAreaView, Image, Switch} from 'react-native';
import React, { useState, isValidElement } from "react";
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';

export default function App({ navigation }) {
    const [isEnabledombro, setIsEnabledombro] = useState(false);
    const [text, setText] = useState([])

    const [isEnabledcostas, setIsEnabledcostas] = useState(false);

    const [isEnabledjoelho, setIsEnabledjoelho] = useState(false);

    const toggleSwitchombro = () => {
      if (isEnabledombro) {
        setText(current => ['']);
      }
      else {
        setText(current => ['Ombro']);
      }

      setIsEnabledombro(previousState => !previousState)
    }
    const toggleSwitchcostas = () => {
      if (isEnabledcostas) {
        setText(current => ['']);
      }
      else {
        setText(current => ['Costas']);
      }

      setIsEnabledcostas(previousState => !previousState)
    }

    const toggleSwitchjoelho = () => {
      if (isEnabledjoelho) {
        setText(current => ['']);
      }
      else {
        setText(current => ['Joelho']);
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
            <View style={{height: 100, width: '100%', justifyContent:'center', alignItems: 'center', marginTop: 30}}>
              <View style={{height: 40, width: 150, backgroundColor: '#fff', borderRadius: 10, justifyContent:'center', alignItems: 'center',}}>
              <Text style={{fontSize: 25}}>{text[0]}</Text>
              </View>
              <View style={{justifyContent:'center', alignItems: 'center',}}>
              <Button color='#000000' mode="contained" onPress={() => navigation.navigate('LastScreen')} style={{ marginTop: 10, width:150, height: 40, borderRadius: 10, alignItems:'center', justifyContent:'center'}}>
    Continuar
  </Button>
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
