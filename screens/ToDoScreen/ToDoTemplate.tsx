import { Text, View, StyleSheet } from 'react-native'

export default function ToDoTemplate( { task }: { task: { name: string, done: boolean } }) {
  return (
    <View style={styles.container}>
      <Text> { task.name } </Text>
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
