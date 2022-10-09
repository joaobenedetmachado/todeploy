import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detalhes from './screens/Detalhes';
import Jogo from './screens/Jogo';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HarmoFit"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#000000' },
            headerTitleStyle: { fontWeight: 'bold', color: '#fff' },
          }}>
          <Stack.Screen name="HarmoFit" component={HomeScreen} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
          <Stack.Screen name="Jogo" component={Jogo} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}