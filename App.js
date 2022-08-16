import React, {useState} from 'react';
import TaskList from './TaskList';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editItem, seteditItem] = useState(' ');
  const handleChange = text => {
    console.log(text);
    setTextInput(text);
  };

  const handleAdd = item => {
    if (editItem !== ' ') {
      setTodos(
        todos.map(element => {
          if (element.id === editItem.id) {
            return {...element, text: textInput};
          }
          return element;
        }),
      );
      seteditItem(' ');
    } else {
      setTodos([...todos, {text: item, id: Math.random() * 10000}]);
    }

    setTextInput('');
  };
  return (
    <View>
      <Text style={styles.header}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={textInput}
        placeholder="Enter Task"
        onChangeText={text => handleChange(text)}
      />
      <Button onPress={() => handleAdd(textInput)} title="Add Task" />
      <ScrollView>
        {todos.map(item => {
          return (
            <View key={item.id}>
              <TaskList
                item={item}
                setTodos={setTodos}
                todos={todos}
                setTextInput={setTextInput}
                seteditItem={seteditItem}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  header: {
    padding: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
