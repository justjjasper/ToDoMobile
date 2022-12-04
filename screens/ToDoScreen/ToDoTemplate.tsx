import { Text, View, StyleSheet } from 'react-native'

export default function ToDoTemplate( { task }: { task: { name: string, done: boolean } }) {
  return (
    <View>
      <Text> { task.name } </Text>
    </View>
  )
}