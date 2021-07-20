import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  NativeBaseProvider,
  Container,
  Text,
  Box,
  Button,
  SimpleGrid,
  VStack,
  HStack,
} from 'native-base';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <Text>Hello</Text>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
