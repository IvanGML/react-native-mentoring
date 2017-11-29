import React, {Component} from 'react';
import { View, Button } from 'react-native';
import { styles } from './styles';

const DefaultButton = props =>
    <View style={styles.buttonContainer}>
        <Button
            title={props.title}
            color={props.color}
            onPress={props.method}
        />
    </View>

export { DefaultButton };

