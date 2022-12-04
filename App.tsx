import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import BottomTabNav from './screens/BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { createStore } from 'redux';

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name= "Bottom Nav"
            children= {() => <BottomTabNav/>}
            options = {{
              headerShown: false
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
