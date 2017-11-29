import React from 'react';
import { View } from 'react-native';
import { LoginPage } from './features/LogoPage';

class Root extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <LoginPage />
            </View>
        );
    }
}

export { Root };