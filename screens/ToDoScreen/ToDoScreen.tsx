import { View, Text, StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../App'
import ToDoTemplate from './ToDoTemplate';
import ButtonScreen from './ButtonScreen';

const Stack = createNativeStackNavigator();

export default function ToDoScreen() {
  const toDoList = useSelector<RootState, any>(state => state.toDo)

  if (toDoList.length === 0) {
    return (
      <View>
        <Text> Add a Task  </Text>
      </View>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}}name = "List" children= { () => <ButtonScreen toDoList={toDoList}/> } />

        {toDoList.map( (task: any, i: number) => (
          <Stack.Screen
            name = {task.name}
            key={i}
            children= { ()=> <ToDoTemplate task={task}/> }/>
        ))}

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  }
})