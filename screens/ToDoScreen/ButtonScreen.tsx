import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ButtonScreen( {toDoList} : {toDoList: {name: string, done: boolean}[] }) {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {toDoList.map( (task: {name: string, done: boolean}, i: number ) => {
        return (
          <Button
            key={i}
            title={task.name}
            onPress={() => navigation.navigate(task.name)}
            />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
