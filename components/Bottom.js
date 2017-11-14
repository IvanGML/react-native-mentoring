import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Bottom = props => 
    <View style={styles.bottomMain}>
        <Text style={styles.text}>
            This is bottom with props " {props.info} ".
        </Text>
    </View>

export default Bottom;

const styles = StyleSheet.create({
    bottomMain: {
        height: '5%',
        backgroundColor: '#fafafa',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        textAlign: 'center'
    }
});