import * as React from 'react';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Detalhes from './screens/Detalhes';
import Login from './screens/Login';
import Problema from './screens/Problema';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#000000'},headerTitleStyle: {fontWeight: 'bold', color:'#fff'},}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
          <Stack.Screen name="Problema" component={Problema} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

