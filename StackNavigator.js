import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homescreens';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import Begin from './screens/Begin';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    < Stack.Screen name="Begin" component={Begin} options={{headerShown:false}} />
      < Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}} />
      <Stack.Screen name="Fit" component={FitScreen} option={{headerShown:false}}/>
      <Stack.Screen name="Rest" component={RestScreen} option={{headerShown:false}}/>

    </Stack.Navigator>
  </NavigationContainer> );
}

export default StackNavigator

const styles = StyleSheet.create({})