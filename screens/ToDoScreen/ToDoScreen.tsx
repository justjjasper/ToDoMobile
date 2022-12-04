import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import ToDoTemplate from './ToDoTemplate';
import { RootState } from '../../App'
const Stack = createNativeStackNavigator();

export default function ToDoScreen() {
  const toDoList = useSelector<RootState, { name: string, done: boolean }[]>(state => state.toDo)

  if (toDoList.length === 0) {
    return (
      <View>
        <Text> Add a Task  </Text>
      </View>
    )
  }
  return (
    <Stack.Navigator>
      {toDoList.map( (task: any) => (
        <Stack.Screen name = {task.name} children= { ()=> <ToDoTemplate task={task}/> }/>
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