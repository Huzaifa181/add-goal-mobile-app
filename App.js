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
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = text => {
    setCourseGoals([...courseGoals, {id: Math.random().toString(), text}]);
  };
  const onDelete = id => {
    setCourseGoals(courseGoals.filter(item => item.id !== id));
  };
  return (
    <View padding={30}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={itemData => {
            return (
              <GoalItem
                title={itemData.item.text}
                onDelete={() => onDelete(itemData.item.id)}
              />
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
