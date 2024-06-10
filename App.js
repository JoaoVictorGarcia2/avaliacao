import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from './src/pages/CreateAccount';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import AddBook from './src/pages/AddBook';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddBook" component={AddBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
