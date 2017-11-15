import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <TextInput
            value = {this.props.value}
            onChangeText={this.props.onChange}
            onSubmitEditing={this.props.onAddItem}
            style={styles.input}
            placeholder='What needs to be done?'
            blurOnSubmit={false}
            returnKeyType='done'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 50
    }
});
