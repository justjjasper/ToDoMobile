import { View, Text, StyleSheet } from 'react-native';

export default function ToDoScreen() {
  return (
    <View style={styles.container}>
      <Text> I got a list of screens </Text>
    </View>
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