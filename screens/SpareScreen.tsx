import { View, Text, StyleSheet } from 'react-native';

export default function SpareScreen() {
  return (
    <View style={styles.container}>
      <Text> Hello, I'm a spare screen </Text>
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