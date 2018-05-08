import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatedByView extends Component {

    render() {
        return (
            <View>
                {/* <Text style={{ marginTop: 10, color: '#CCCCCC', alignContent: 'center' }}>This is a sample application to learn react native basic layout strategies and components. This page is made with help of FLEX and also using inline/import style.</Text> */}
                <Text style={{ color: '#8C8C8C', textAlign: 'center' }}>Author- Diwakar Mishra</Text>
                <Text style={{ color: '#8C8C8C', textAlign: 'center' }}>https://github.com/Diwakar1988</Text>
            </View >
        );
    }
}