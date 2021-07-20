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
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, {key: Math.random().toString(), text}]);
    setText('');
  };
  return (
    <View padding={30}>
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
        <Button title="Add" onPress={addGoalHandler}></Button>
      </View>
      <View>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={itemData => {
            return (
              <View style={styles.listItem}>
                <Text>{itemData.item}</Text>
              </View>
            );
          }}></FlatList>
      </View>
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

export default App;
