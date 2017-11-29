import React, {Component} from 'react';
import { View } from 'react-native';
import { DefaultButton as Button } from '../../components/Button';
import { CustomInput as Input } from '../../components/Input';
import { DefaultImage as Image } from '../../components/Img';
import { styles } from './styles';


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
                <Image source={require('../../images/LogoEpamer.png')} />
                <Input
                    placeholder="Username"
                    textHandler={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Input
                    placeholder="********"
                    textHandler={(password) => this.setState({password})}
                    value={this.state.passwordefe}
                />
                <Button
                    title="LOGIN"
                    color={"#a3c644"}
                    method={this.showAlert}
                />
            </View>
        );
    }
}