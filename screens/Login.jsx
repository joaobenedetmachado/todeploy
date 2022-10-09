import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import EmailCaixa from '../components/EmailCaixa';

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Emai
      <Text style={{ fontSize: 21, marginBottom: 16 }}>Tela Inicial</Text>
      <Button mode="contained" style ={{marginBottom: 16}} onPress={() => navigation.navigate('Detalhes')}>
        Ir para Dets
      </Button>
      <Button mode="contained" style ={{marginBottom: 16}} onPress={() => navigation.navigate('Problema')}>
        sacarose
      </Button>
    </View>
  );
}