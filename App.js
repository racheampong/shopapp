import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {NavigationContainer }from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack' 
import login from './screens/Login';
import Home from './screens/Home';
export default function App() {

  const MainNavigator = createStackNavigator();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator 
        screenOption={{ headerShown: false}}
        initialRouteName ="Login"
        >
          <MainNavigator.Screen name = "Login" component={login} />
          <MainNavigator.Screen name = "Home" component={Home} />


        </MainNavigator.Navigator>
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
