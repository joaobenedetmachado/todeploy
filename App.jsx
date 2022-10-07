import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Detalhes from './screens/Detalhes';
import Jogo from './screens/Jogo';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 21, marginBottom: 16 }}>Tela Inicial</Text>
      <Button mode="contained" style ={{marginBottom: 16}} onPress={() => navigation.navigate('Detalhes')}>
        Ir para Dets
      </Button>
      <Button mode="contained" style ={{marginBottom: 16}} onPress={() => navigation.navigate('Jogo')}>
        sacarose
      </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#000000'},headerTitleStyle: {fontWeight: 'bold', color:'#fff'},}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
          <Stack.Screen name="Jogo" component={Jogo} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

