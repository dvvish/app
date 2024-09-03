import React, { useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import { jsxDEV } from 'react/jsx-dev-runtime';

const Begin = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigation]);

  return (
     
    <View style={styles.container}>
      <Text style={styles.text}>FitX</Text>
      <Text style={styles.text2}>your workout coach ....</Text>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#566D7E",
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle:"italic", 
    color:"#C6DEFF",
  },
  text2:{
    fontSize:10,
    fontStyle:"italic", 
    color:"#C6DEFF",

  }
});

export default Begin;
