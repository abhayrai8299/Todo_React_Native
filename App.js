import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutScreen from './About';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Button,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editItem, seteditItem] = useState(' ');

  useEffect(() => {
    Keyboard.dismiss();
  }, [todos]);

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
  // console.log(Stack);

  // const HomeScreen = () => {
  //   return (
  //     <View>
  //       <Text style={{ fontSize: 24 }}>Home Screen</Text>
  //     </View>
  //   )
  // }

  // const AboutScreen = () => {
  //   return (
  //     <View>
  //       <Text style={{ fontSize: 34 }}>About Screen</Text>
  //     </View>
  //   )
  // }
  const HomeScreen = ({navigation}) => {
    return (
      // // Basic Navigation
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="About" component={AboutScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      // // Navigator Props
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName='About' screenOptions={{ headerStyle: { backgroundColor: 'red' } }}>
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="About" component={AboutScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      // // Screen Props
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: 'red' }, title: 'GeekyShows App', headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }, headerTitleAlign: 'center', headerShown: true, headerLeft: (props) => <MaterialCommunityIcons name="home" size={34} color='white' onPress={() => console.log('Home Clicked')} />, headerRight: (props) => <MaterialCommunityIcons name="bell-circle" size={34} color='white' style={{ padding: 15 }} onPress={() => console.log('Bell Clicked')} /> }} />
      //     <Stack.Screen name="About" component={AboutScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      // // Group
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'red' } }}>
      //       <Stack.Screen name="Home" component={HomeScreen} />
      //       <Stack.Screen name="About" component={AboutScreen} />
      //     </Stack.Group>
      //     <Stack.Screen name="Service" component={ServiceScreen} />
      //     <Stack.Screen name="Contact" component={ContactScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  };
  const DetailsScreen = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  };
  function HomeScreens({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }

  function NotificationsScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreens} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="About" component={AboutScreen} />
    //   </Drawer.Navigator>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         headerLeft: props => (
    //           <MaterialCommunityIcons name="home" size={24} color="black" />
    //         ),
    //       }}
    //     />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>
    //   <View>
    //     <Text style={styles.header}>Todo List</Text>
    //     <TextInput
    //       style={styles.input}
    //       value={textInput}
    //       placeholder="Enter Task"
    //       onChangeText={text => handleChange(text)}
    //     />
    //     <Button onPress={() => handleAdd(textInput)} title="Add Task" />
    //     <ScrollView>
    //       {todos.map(item => {
    //         return (
    //           <View key={item.id}>
    //             <TaskList
    //               item={item}
    //               setTodos={setTodos}
    //               todos={todos}
    //               setTextInput={setTextInput}
    //               seteditItem={seteditItem}
    //             />
    //           </View>
    //         );
    //       })}
    //     </ScrollView>
    //   </View>
    // </NavigationContainer>
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
