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
  Modal,
  Text,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewGoalInputScreen';

const GoalInput = ({addGoalHandler, visible, onCancel}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');
  const addText = () => {
    addGoalHandler(text);
    setText('');
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={setText}
          value={text}
          style={{
            width: '80%',
            marginVertical: 20,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={{width: '40%'}}>
            <Button title="Cancel" color="red" onPress={onCancel}></Button>
          </View>
          <View style={{width: '40%'}}>
            <Button title="Add" onPress={addText}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalInput;
