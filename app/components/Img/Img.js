import React, {Component} from 'react';
import { Image, View } from 'react-native';
// import { styles } from './styles';

const DefaultImage = props =>
    <View>
        <Image source={props.source} />
    </View>

export { DefaultImage };

