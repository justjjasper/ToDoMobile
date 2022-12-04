import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToDoScreen from './ToDoScreen/ToDoScreen';
import SpareScreen from './SpareScreen';
import { Button } from 'react-native';
const Bottom = createBottomTabNavigator();

export default function BottomTabNav () {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="To Do List"
        children= { () => <ToDoScreen/> }
        options={{
          headerRight: () => (
            <Button
            onPress={() => alert('This is a button')}
            title="Button"
            color="blue"
            />
          )
        }}
        />
      <Bottom.Screen name="Spare Screen" children= { () => <SpareScreen/> } />
    </Bottom.Navigator>
  )
}