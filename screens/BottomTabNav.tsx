import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToDoScreen from './ToDoScreen/ToDoScreen';
import SpareScreen from './SpareScreen';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../actions';

const Bottom = createBottomTabNavigator();

export default function BottomTabNav () {
  const dispatch = useDispatch();

  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="To Do List"
        children= { () => <ToDoScreen/> }
        options={{
          headerRight: () => (
            <Button
            onPress={() => dispatch(toggleModal())}
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