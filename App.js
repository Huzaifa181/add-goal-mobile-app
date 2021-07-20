import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View padding={30}>
      <View>
        <TextInput
          placeholder="Course Goal"
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}></TextInput>
        <Button title="Add"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
