import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import SignupLoginScreen from './screens/SignupLoginScreen'

//import MyHeader from './components/MyHeader'

export default class App extends React.Component {
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
}


const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
