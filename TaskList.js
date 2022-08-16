import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

const TodoList = ({item, setTodos, todos, setTextInput, seteditItem}) => {
  const DeleteHandler = id => {
    setTodos(todos.filter(index => index.id !== id));
  };
  const EditHandler = items => {
    setTextInput(items.text);
    seteditItem(items);
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.text}</Text>
      <View style={{}}>
        <Button
          onPress={() => DeleteHandler(item.id)}
          title="Delete"
          color="red"
        />
        <Button onPress={() => EditHandler(item)} title="Edit" color="blue" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    borderColor: '#f8bc45',
    backgroundColor: '#f8bc45',
    borderWidth: 1.5,
    marginVertical: 10,
  },
  btnContainer: {
    padding: 7,
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    marginRight: 10,
    backgroundColor: 'rgb(232, 73, 70)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
  },
  todoText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default TodoList;
