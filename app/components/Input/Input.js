import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const CustomInput = props =>
    <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={props.textHandler}
        value={props.value}
    />

export { CustomInput };

