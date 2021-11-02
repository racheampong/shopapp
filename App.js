import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {NavigationContainer }from '@react-navigation/native'
import {createNativeStackNavigator}from '@react-navigation/native-stack' 
import Login from './screens/Login';
import SignUp from './screens/SignUp';

export default function App() {

 const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{ headerShown: false}}
        initialRouteName ="Login"
        >
          <Stack.Screen name = "Login" component={Login} />
          <Stack.Screen name = "SignUp" component={SignUp} />


        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
