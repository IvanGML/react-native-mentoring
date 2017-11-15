import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class PizzaConverter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    render() {
        return(
            <View style={styles.bottomMain}>
                <TextInput
                    style={{height: 40, width: '80%'}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
          </View>
        );
    }
}

export default PizzaConverter;

const styles = StyleSheet.create({
    bottomMain: {
        padding: 20,
        minHeight: '15%',
        backgroundColor: '#fafafa',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        textAlign: 'center'
    }
});