import * as React from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Problema from './screens/Problema';
import Login from './screens/Login';

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
          <Stack.Screen name="HarmoFit" component={Login} />
          <Stack.Screen name="Problema" component={Problema} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
