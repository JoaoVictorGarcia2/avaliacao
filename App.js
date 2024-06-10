import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from './src/pages/CreateAccount';
import Home from './src/pages/Home';
import Login from './src/pages/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
  <Stack.Screen
    name="Login"
    component={Login}
    options={{ headerShown: false }} // Oculta a barra de navegação
  />
  <Stack.Screen
    name="CreateAccount"
    component={CreateAccount}
    options={{ headerShown: false }} // Oculta a barra de navegação
  />
  <Stack.Screen
    name="Home"
    component={Home} />
</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
