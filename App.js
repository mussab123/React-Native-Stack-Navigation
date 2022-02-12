import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';


export default function App() {


  return (
   <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
