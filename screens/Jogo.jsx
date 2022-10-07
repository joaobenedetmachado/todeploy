import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';


export default function Jogo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 21, marginBottom: 16 }}>
        la, agora detalhes.
      </Text>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        gb
      </Button>
    </View>
  );
}
