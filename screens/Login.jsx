import * as React from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import { Button } from 'react-native-paper'

import TextNome from '../components/TextNome';
import TextEmail from '../components/TextEmail.jsx'


export default function Login({ navigation }) {

  return (
    <SafeAreaView>
      <View style={styles.home}>
        <View style={styles.arealogo}>
        
        </View>
        <View style={styles.arealogin}>
          <TextNome
          style={styles.inputnome}
          placeholder="Nome"
          />
          <TextEmail style={styles.inputemail} placeholder="Email"/>
          <View style={{marginTop: 42, alignItems: 'center'}}>
            <Button mode="contained" 
                    style={styles.botao}
                    onPress={() => navigation.navigate('Detalhes')}>
              Confirmar
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  arealogo: {
    height: '50%',
    width: '100%',
    borderWidth:1,
    borderStyle: 'dashed',
    borderColor:'red',
  },
  arealogin: {
    height: '50%',
    width: '100%',
    borderWidth:1,
    borderStyle: 'dashed',
    borderColor:'red',
  },
  inputnome: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#ffffff',
    borderWidth: 1,
    borderBottom: 'solid',
    borderBottomColor:'#ffffff',
    fontSize: 20,
  },
  inputemail: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#ffffff',
    borderWidth: 1,
    borderBottom: 'solid',
    borderBottomColor:'#ffffff',
    fontSize: 20,
  },
  botao: {backgroundColor:'#fff',
         color: '#000000',
        width: '40%'}
  
});