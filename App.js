import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navigation from './src/Navigation/Navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor:'#f9fbfc',
    height:'100%'
  },
});
