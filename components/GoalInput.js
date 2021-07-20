import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Text,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewGoalInputScreen';

const GoalInput = ({addGoalHandler}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');
  const addText = () => {
    addGoalHandler(text);
    setText('');
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        placeholder="Course Goal"
        onChangeText={setText}
        value={text}
        style={{
          flex: 1,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}></TextInput>
      <Button title="Add" onPress={addText}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalInput;
