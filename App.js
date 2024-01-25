import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/sandBox';

export default function App() {

  const [todos, setTodos] = useState([
    {text:'buy coffee', key:'1'},
    {text:'create an app', key:'2'},
    {text:'play on the switch', key:'3'},
  ])

  const pressHandler = (key)=>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key !=key)
    })
  }

  const submitHandler = (text) => {

    // form validation
    if(text.length > 3){
      setTodos((prevTodos)=>{
        return [
          {text:text, key:Math.random().toString() },
          ...prevTodos
        ]
      })
    } else{
      Alert.alert('Oops!', 'Todos must be over 3 chars long ',[
        {text:'Understood', onPress:()=> console.log('alert closed')}
      ])
    }
    
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) =>(
                // <Text>{item.text}</Text>
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
            
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  content:{
    padding:40,
    // flex prevents our content from overflowing and being hidden in the screen
    flex:1,
  },
  list:{
    marginTop:20,
    flex:1,
  },
});
