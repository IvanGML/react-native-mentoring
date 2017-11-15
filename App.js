import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      items: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)

  }
  handleAddItem() {
    console.log('start');
    if(!this.state.value) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ]
    console.log('ready to add value to state');
    this.setState({
      items: newItems,
      value: ""
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={value=>this.setState({value})}
        />
        <View style={styles.content}>
          <Text>
            something inside
          </Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    ...Platform.select({
      android: {
        paddingTop: 30,
      }
    })
  },
  content: {
    flex: 1
  }
});
