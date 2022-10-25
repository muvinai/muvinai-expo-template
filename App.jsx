import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import InitialNavigator from './navigation/InitialNavigator';
import { store } from './stores/store';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <InitialNavigator />
        <StatusBar style="auto" />
      </View>
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
