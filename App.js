import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutScreen from './screens/WorkoutScreen';
import HomeScreen from './screens/homescreens';
import StackNavigator from './StackNavigator';
import { FitnessContext } from './Context';
 

export default function App() {
  return (
    <FitnessContext>
 <StackNavigator/>
    </FitnessContext>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:25
  },
});
