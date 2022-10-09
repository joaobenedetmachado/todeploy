import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper'

export default function HomeScreen({ navigation }) {

  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <View style={styles.home}>
        <View style={styles.arealogo}>
        
        </View>
        <View style={styles.arealogin}>
          <TextInput
          style={styles.inputnome}
          onChangeText={onChangeText}
          value={text}
          placeholder="Nome"
          />
          <TextInput style={styles.inputemail} onChangeText={onChangeText} value={text} placeholder="Email" />
          <View style={{marginTop: 42, alignItems: 'center'}}>
            <Button mode="contained" 
                    style={{backgroundColor:'#fff', color: '#000000', width: '40%'}}
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
  
});