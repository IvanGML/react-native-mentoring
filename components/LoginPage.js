import React, {Component} from 'react';
import { StyleSheet, Image, View, TextInput, Button } from 'react-native';

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertText: 'it works',
            text: '',
            password: ''
        }
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert() {
        alert(this.state.alertText);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/LogoEpamer.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Username'}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TextInput
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    style={styles.textInput}
                    placeholder={'********'}
                />
                <Button
                    style={styles.button}
                    title="LOGIN"
                    color="#a3c644"
                    onPress={this.showAlert}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '50%'
    },
    textInput: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#999999'
    },
    button: {
        padding: 20,
        fontSize: 20
    }
});
