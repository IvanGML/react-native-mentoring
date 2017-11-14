import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bottom from './components/Bottom.js';

console.log('it works well');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Bottom info={"THIS IS INFO"} style={styles.bottom}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fafafa'
  },
  bottom: {
    alignSelf: 'flex-end',
    marginVertical: 0
  }
});
